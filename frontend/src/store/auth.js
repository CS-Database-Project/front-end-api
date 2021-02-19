import { createSlice } from '@reduxjs/toolkit';

//Auth Slice

const slice = createSlice({
    name: 'auth',
    initialState: {},
    reducers: {
        userLoginSucceeded(user, action){
            user = action.payload;
        }
    }
});

export const { userLoginSucceeded } = slice.actions;

export default slice.reducer;

