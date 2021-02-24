import { combineReducers } from "redux";
import productsReducer from './products';
import categoriesReducer from './categories';
import customersReducer from './customers';

export default combineReducers({
  products: productsReducer,
  customers: customersReducer,
  categories: categoriesReducer
});
