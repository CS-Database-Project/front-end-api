import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from '../apiActions';
import { createSelector } from 'reselect';
import configData from '../../config.json';
import moment from 'moment';

//Products slice
const slice = createSlice({
    name: "products",
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },

    reducers: {
        //Events => EventHandlers
        productsRequested(products, action){
            products.loading = true;
        },

        productsRequestFailed(products, action){
            products.loading = false;
            
        },

        // payload: [message: , data: ]
        productsReceived(products, action){
            products.list = action.payload.data;
            products.loading = false;
            products.lastFetch = Date.now();
        },

        //payload: {productId: 123 , name: sff , ...} new product
        // productCreated(products, action){
        //     products.list.push(action.payload);
        // },

        //payload: {productId: 123} Deleted product id
        productRemoved(products, action){
            const index = products.list.findIndex(p => p.productId === action.payload.data);
            products.list[index].deleted = true;    
        },

        // //payload: {productId: 123 , name: sgs, ...} updated product
        // productUpdated(products, action){
        //     const index = products.list.findIndex(p => p.productId === action.payload.productId);
        //     products.list.splice(index, 1);
        //     products.list.push(action.payload);
        // }

        //payload: {productId: 123 ,variantName: , newQuantity:  } 
        productCountUpdated(products, action){
            const { productId, variantName, newCount  } = action.payload;
            const index = products.list.findIndex(p => p.productId === productId );
            const variants = products.list[index].variants;
            const variantIndex =variants.findIndex(v => v.name === variantName);
            variants[variantIndex].countInStock = newCount;
        }

    }
});

//Reducer
export default slice.reducer;


//Action Creators
export const { 
    productsRequested, 
    productsReceived, 
    productCreated, 
    productRemoved, 
    productUpdated,
    productsRequestFailed,
    productCountUpdated } = slice.actions;

const productsURL = "/product";
const refreshTime = configData.REFRESH_TIME;


//Action Invokers
export const loadProducts = () => (dispatch, getState) => {
    const { lastFetch } = getState().entities.products;

    const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
    if (diffInMinutes < refreshTime) return;

    return dispatch(
        apiCallBegan({
            url: productsURL + '/product-view',
            onStart: productsRequested.type,
            onSuccess: productsReceived.type,
            onError: productsRequestFailed.type
        })
    );
};

//Selectors
export const getAllProducts = createSelector(
    state => state.entities.products.list,
    products => products.filter(p => p.deleted === false)
);

export const getDeletedProducts = createSelector(
    state => state.entities.products.list,
    products => products.filter(p => p.deleted === true)
);

export const getProductLoadingStatus = createSelector(
    state => state.entities.products.loading,
    loading => loading
);



export const getProductById = productId =>
    createSelector(
        state => state.entities.products.list,
        products => {
            const index = products.findIndex(p => p.productId === productId);
            if(index !== -1)return products[index];
            return {};
        }
    );

export const updateProductCount = (updated) => productCountUpdated(updated);


export const saveImage = (image, productId) => (dispatch, getState) => {
    const config = {
        headers: {
            'Content-Type': `multipart/form-data`,
        }
    };
    return dispatch(apiCallBegan({
        url: productsURL + "/product-register-image/" + productId,
        method: "post",
        data: image,
        config
    }));
}

export const deleteProduct = (id) => {
    return(apiCallBegan({
        url: `${productsURL}/product-delete/${id}`,
        method: "delete",
        onSuccess: productRemoved.type
    }));
}


export const updateProductStock = (stockUpdate) => {
    return apiCallBegan({
        url: productsURL + `/product-stock-update`,
        method: "put",
        data: stockUpdate,
        onSuccess: productCountUpdated.type,
    });

};






