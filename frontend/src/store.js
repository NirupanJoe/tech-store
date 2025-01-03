import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import productsReducer from './slice/productsSlice';
import productReducer from './slice/productSlice';
import searchReducer from './slice/searchSlice';
import authReducer from './slice/authSlice';
import cartReducer from './slice/cartSlice';
import orderReducer from './slice/orderSlice';

const reducer = combineReducers({
	productsState: productsReducer,
	productState: productReducer,
	searchState: searchReducer,
	authState: authReducer,
	cartState: cartReducer,
	orderState: orderReducer,
});

const middleware = () => [thunk];

const store = configureStore({ reducer, middleware });

export default store;
