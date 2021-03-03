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
        orderStatusUpdated(orders, action){
            const { orderId,orderStatusId  } = action.payload;
            console.log(action.payload);
            // const index = orders.list.findIndex(o => o.orderId === orderId );
            // orders.list[index].orderStatusId = orderStatusId;
        }
    }
});

//Reducer
export default slice.reducer;


//Action Creators
export const { 
    ordersCreateRequested, 
    ordersReceived, 
    ordersCreateRequestFailed,
    orderStatusUpdated } = slice.actions;

const ordersURL = "order";
const refreshTime = configData.REFRESH_TIME;


//Action Invokers
export const loadOrders = () => (dispatch, getState) => {
    const { lastFetch } = getState().entities.orders;

    const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
    if (diffInMinutes < refreshTime) return;
    
    return dispatch(
        apiCallBegan({
            url: ordersURL + '/view-order',
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

export const getOrderByCustomerId = customerId =>
    createSelector(
        state => state.entities.orders.list,
        orders => {
            const h = orders.filter(o=> o.customerId === customerId);
            return h;
        }
    );

export const placeOrder = (order) => (dispatch)=>{
        return dispatch(
            apiCallBegan({
                url: ordersURL + '/placeOrder', 
                method: "post",
                data: order,
                onStart: ordersCreateRequested.type,
                onSuccess: ordersReceived.type,
                onError: ordersCreateRequestFailed.type
            })
        );
    }


export const updateOrderStatus = (orderId,orderStatusId) =>{
        return apiCallBegan({
            url: `${ordersURL}/update-order-status/${orderId}`,
            method: "put",
            data: {orderId,orderStatusId},
            onSuccess: orderStatusUpdated.type,
        });
}
