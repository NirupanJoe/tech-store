import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import productsReducer from './slice/productsSlice';

const reducer = combineReducers({ productsState: productsReducer });

const middleware = () => [thunk];

const store = configureStore({ reducer, middleware });

export default store;
