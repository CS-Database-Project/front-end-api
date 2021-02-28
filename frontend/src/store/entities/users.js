import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from '../apiActions';
import { createSelector } from 'reselect';
import configData from '../../config.json';
import moment from 'moment';

//Customers slice
const slice = createSlice({
    name: "users",
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        //Events => EventHandlers
        usersRequested(users, action){
            users.loading = true;
        },

        usersRequestFailed(users, action){
            users.loading = false;
            
        },

        usersReceived(users, action){
            users.list = action.payload.data;
            users.loading = false;
            users.lastFetch = Date.now();
        },

        usersDeactivated(users, action){
            const { userId } = action.payload.data;
            const index = users.list.findIndex(u => u.userId === userId );
            users.list[index].activeStatus = false;
        },
        
        usersActivated(users, action){
            const { userId } = action.payload.data;
            const index = users.list.findIndex(u => u.userId === userId );
            users.list[index].activeStatus = true;
        }
    }
});

//Reducer
export default slice.reducer;

//Action Creators
export const { 
    usersRequested, 
    usersReceived,
    usersActivated, 
    usersDeactivated, 
    usersRequestFailed} = slice.actions;

const usersURL = "user";
const refreshTime = configData.REFRESH_TIME;

//Action Invokers
export const loadUsers = () => (dispatch, getState) => {
    const { lastFetch } = getState().entities.users;

    const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
    if (diffInMinutes < refreshTime) return;
    
    return dispatch(
        apiCallBegan({
            url: usersURL + '/view',
            onStart: usersRequested.type,
            onSuccess: usersReceived.type,
            onError: usersRequestFailed.type
        })
    );
};

export const getAllUsers = createSelector(
    state => state.entities.users.list,
    users => users
);

export const deactivateUser = (userId) =>{
    return apiCallBegan({
        url: `${usersURL}/change-account-status`,
        method: "put",
        data: {userId, activeStatus: false},
        onSuccess: usersDeactivated.type,
    });
}

export const activateUser = (userId) =>{
return apiCallBegan({
    url: `${usersURL}/change-account-status`,
    method: "put",
    data: {userId, activeStatus: true},
    onSuccess: usersActivated.type,
});
}
