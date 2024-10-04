import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import productsReducer from './slice/productsSlice';
import productReducer from './slice/productSlice';
import searchReducer from './slice/searchSlice';

const reducer = combineReducers({
	productsState: productsReducer,
	productState: productReducer,
	searchState: searchReducer,
});

const middleware = () => [thunk];

const store = configureStore({ reducer, middleware });

export default store;
