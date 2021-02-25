import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from '../apiActions';
import { createSelector } from 'reselect';
import configData from '../../config.json';
import moment from 'moment';

//Orders slice
const slice = createSlice({
    name: "orders",
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },

    reducers: {
        //Events => EventHandlers
        ordersCreateRequested(orders, action){
            orders.loading = true;
        },

        ordersCreateRequestFailed(orders, action){
            orders.loading = false;
        },

        // payload: [message: , data: ]
        ordersReceived(orders, action){
            orders.list = action.payload.data;
            orders.loading = false;
            orders.lastFetch = Date.now();
        }, 
    }
});

//Reducer
export default slice.reducer;


//Action Creators
export const { 
    ordersCreateRequested, 
    ordersReceived, 
    ordersCreateRequestFailed } = slice.actions;

const ordersURL = "/order";
const refreshTime = configData.REFRESH_TIME;


//Action Invokers
export const createOrders = () => (dispatch, getState) => {
    const { lastFetch } = getState().entities.orders;

    const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
    if (diffInMinutes < refreshTime) return;
    
    return dispatch(
        apiCallBegan({
            url: ordersURL + '/order-view',
            onStart: ordersCreateRequested.type,
            onSuccess: ordersReceived.type,
            onError: ordersCreateRequestFailed.type
        })
    );
};


export const getAllOrders = createSelector(
    state => state.entities.orders.list,
    orders => orders
);

export const getOrderById = orderId =>
    createSelector(
        state => state.entities.orders.list,
        orders => {
            const index = orders.findIndex(o => o.orderId === orderId);
            if(index !== -1)return orders[index];
            return {};
        }
    );

