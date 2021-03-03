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

        addMainCategoryRequested(categories, action){
            categories.adding = true;
            categories.mainCategoryAdded = false;
        },

        addMainCategoryRequestFailed(categories, action) {
            categories.adding = false;
        },

        addMainCategoryRequestSucceeded(categories, action) {
            categories.adding = false;
            categories.list.push(action.payload);
            categories.mainCategoryAdded = true;
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
    categoriesRequestFailed,
    addMainCategoryRequested,
    addMainCategoryRequestFailed,
    addMainCategoryRequestSucceeded} = slice.actions;

const categoriesURL = "product";
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


export const getCategoryAddingStatus = createSelector(
    state => state.entities.categories.adding,
    adding => adding
);

export const addMainCategory = (categoryName) => {
    
    return (apiCallBegan({
        url: categoriesURL + '/main-category-register',
        data: { name: categoryName },
        method: 'post',
        onStart: addMainCategoryRequested.type,
        onSuccess: addMainCategoryRequestSucceeded.type,
        onError: addMainCategoryRequestFailed.type
    }))
}


