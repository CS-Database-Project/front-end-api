import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from '../apiActions';
import { createSelector } from 'reselect';
import configData from '../../config.json';
import moment from 'moment';


//Categories Slice
const slice = createSlice({
    name: 'categories',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers:{

        //Events => EventHandlers
        categoriesRequested(categories, action) {
            categories.loading = true;
        },

        categoriesRequestFailed(categories, action) {
            categories.lastFetch = Date.now();
        },

        // payload: [message: , data: ]
        categoriesReceived(categories, action) {
            categories.list = action.payload.data;
            categories.loading = false;
            categories.lastFetch = Date.now();
        },

        
    }
});

//Reducer
export default slice.reducer;

//Action Creators
export const {
    categoriesRequested,
    categoriesReceived,
    productCreated,
    productRemoved,
    productUpdated,
    categoriesRequestFailed } = slice.actions;

const categoriesURL = "/product";
const refreshTime = configData.REFRESH_TIME;


//Action Invokers
export const loadCategories = () => (dispatch, getState) => {
    const { lastFetch } = getState().entities.categories;

    const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
    if (diffInMinutes < refreshTime) return;

    return dispatch(
        apiCallBegan({
            url: categoriesURL + '/category-view',
            onStart: categoriesRequested.type,
            onSuccess: categoriesReceived.type,
            onError: categoriesRequestFailed.type
        })
    );
};


export const getAllCategories = createSelector(
    state => state.entities.categories.list,
    categories => categories
);

export const getCategoriesLoadingStatus = createSelector(
    state => state.entities.products.loading,
    loading => loading
);

