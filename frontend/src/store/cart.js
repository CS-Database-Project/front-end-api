import { createSlice } from '@reduxjs/toolkit';

//Cart Slice 
const slice = createSlice({
    name: "cart",
    initialState: [], // {product: {productId: 214, name: "rgerg", ...}, count: 1341}
    reducers: {
        
        /**
         * action.payload: productObject
         */  
        itemAdded(items, action){
            items.push({product: {...action.payload}, count: 1});
        },
  
        /**
         * action.payload: productID
         */
        itemRemoved(items, action){
            const index = items.findIndex(i => i.product.productId === action.payload);
            if(index !== -1){
                items = items.splice(index, 1);
            }
        },

        /**
         * action.payload: {productId, count: New Count,}
         */
        itemCountUpdated(items, action){
            const index = items.findIndex(i => i.product.productId === action.payload.productId);
            if (index !== -1) {
                items[index].count = action.payload.count; 
            }
        },

        /**
         * action.payload: None
         */
        cartEmptied(items, action){
            items = items.splice(0, items.length);
        }
    }
});


//Reducer
export default slice.reducer;

//Action Creators
export const { itemAdded, itemRemoved, cartEmptied, itemCountUpdated } = slice.actions;

//Action Invokers
export const addToCart = item => itemAdded(item);

export const removeFromCart = productId => itemRemoved(productId);

export const updateItemCount = (productId, newCount) => itemCountUpdated({productId, count:newCount})

export const emptyCart = () => cartEmptied();
