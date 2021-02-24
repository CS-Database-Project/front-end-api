import { createSlice } from '@reduxjs/toolkit';
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
        }
    }
});

export const { userLoginRequested, userLoginFailed, userLoginSucceeded, userLoggedOut } = slice.actions;

export default slice.reducer;


//Action Creators
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

