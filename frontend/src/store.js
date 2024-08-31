import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import productReducer from './slice/productsSlice';

const reducer = combineReducers({ productState: productReducer });

const middleware = () => [thunk];

const store = configureStore({ reducer, middleware });

export default store;
