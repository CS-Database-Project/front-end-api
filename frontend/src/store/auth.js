import { createSelector, createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './apiActions';
//Auth Slice

const slice = createSlice({
    name: 'auth',
    initialState: {
        data: {},
        token: '',
        logging: false,
        loggedIn : false
    },
    reducers: {

        userLoginRequested(user, action){
            user.logging = true;
        },

        userLoginFailed(user, action) {
            user.logging = false;
            user.error = action.payload;
        },

        userLoginSucceeded(user, action){
            user.logging = false;
            delete user.error;
            user.data = action.payload.data;
            user.token = action.payload.token;  
            user.loggedIn = true;
        },




        userLoggedOut(user,action){
            user.loggedIn = false;
            user.data = {}
        },

        checkOutStarted(user, action){
            user.checkOutStarted = true;
        },

        checkOutStartedDeleted(user, action) {
            delete user.checkOutStarted
        },

        buyMethodSelected(user, action){
            user.buyMethod=action.payload;
        },

        shippingAddressSelected(user,action){

        },

        


    }
});


//Reducer
export default slice.reducer;


//Action Creators
export const { 
    userLoginRequested, 
    userLoginFailed, 
    userLoginSucceeded, 
    userLoggedOut,
    checkOutStarted,
    checkOutStartedDeleted,
    buyMethodSelected,
    shippingAddressSelected
    } = slice.actions;


//Action Invokers
export const login = (usertype, data) => (dispatch) => {
    const url = `${usertype}/login`;
    return dispatch(
        apiCallBegan({
            url,
            onStart: userLoginRequested.type,
            onError: userLoginFailed.type,
            onSuccess: userLoginSucceeded.type,
            method: 'post',
            data
        })
    );
};


export const logout = () => (dispatch) =>dispatch(userLoggedOut());

export const selectBuyMethod =(selectedMethod) => buyMethodSelected(selectedMethod);

//Selectors

export const getAuthDetails = createSelector(
    state => state.auth.data,
    userData => userData
);


export const getLoggedInStatus = createSelector(
    state => state.auth,
    auth => auth.loggedIn
);

export const setCheckOutStarted = () => checkOutStarted();

export const deleteCheckOutStarted = () => checkOutStartedDeleted();

export const getCheckoutStatus = createSelector(
    state => state.auth,
    auth => auth.checkOutStarted
);
