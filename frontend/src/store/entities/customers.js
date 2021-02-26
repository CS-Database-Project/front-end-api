import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from '../apiActions';
import { createSelector } from 'reselect';
import configData from '../../config.json';
import moment from 'moment';

//Customers slice
const slice = createSlice({
    name: "customers",
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        //Events => EventHandlers

        customersRegisterRequested(customers, action) {
            delete customers.registerSuccessful;
            customers.registering = true;
        },

        customersRegisterRequestFailed(customers, action) {
            customers.registering = false;
        },

        customersRegisterRequestSucceeded(customers, action) {
            delete customers.registering;
            customers.registerSuccessful = true;
            customers.list.push(action.payload.data);
        },


        customersRequested(customers, action){
            customers.loading = true;
        },

        customersRequestFailed(customers, action){
            customers.loading = false;
            
        },

        customersReceived(customers, action){
            customers.list = action.payload.data;
            customers.loading = false;
            customers.lastFetch = Date.now();
        },


        // customerRemoved(customers, action){
            //const index = customers.list.findIndex(p => p.customerId !== action.payload);
            //customers = customers.list.splice(index, 1);   
        // },

        //customerUpdated(customers, action){
            // const index = customers.list.findIndex(p => p.customerId === action.payload.customerId);
            // customers.list.splice(index, 1);
            // customers.list.push(action.payload);
        // },
    }
});

//Reducer
export default slice.reducer;

//Action Creators
export const { 
    customersRequested, 
    customersReceived,
    customerCreated, 
    customerRemoved, 
    customerUpdated,
    customersRequestFailed,
    customersRegisterRequested,
    customersRegisterRequestFailed,
    customersRegisterRequestSucceeded } = slice.actions;

const customersURL = "customer";
const refreshTime = configData.REFRESH_TIME;

//Action Invokers
export const loadCustomers = () => (dispatch, getState) => {
    const { lastFetch } = getState().entities.customers;

    const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
    if (diffInMinutes < refreshTime) return;
    
    return dispatch(
        apiCallBegan({
            url: customersURL + '/view',
            onStart: customersRequested.type,
            onSuccess: customersReceived.type,
            onError: customersRequestFailed.type
        })
    );
};

export const getAllCustomers = createSelector(
    state => state.entities.customers.list,
    customers => customers
);

export const registerCustomer = (customer) => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url: `${customersURL}/register`,
            method: "post",
            data: customer,
            onStart: customersRegisterRequested,
            onSuccess: customersRegisterRequestSucceeded.type,
            onError: customersRegisterRequestFailed
        })
    );
}


//export const addCustomer = (customer) => {
    //apiCallBegan({
        //url: customersURL,
        //method: "post",
        //data: customer,
        //onSuccess: customerCreated.type
    //});
//}

//export const deleteCustomer = (id) => {
    //return(apiCallBegan({
        //url: `${customersURL}/customer_delete/${id}`,
        //method: "delete",
        //onSuccess: customerRemoved.type
    //}));
//}