import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
	initialState: {
		loading: false,
		orders: [],
		error: '',
	},
	name: 'order',
	reducers: {
		createOrderRequest (state) {
			state.loading = true;
		},
		createOrderSuccess (state, action) {
			state.loading = false;
			state.orders = action.payload;
		},
		createOrderFail (state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		getOrdersRequest (state) {
			state.loading = true;
		},
		getOrdersSuccess (state, action) {
			state.loading = false;
			state.orders = action.payload;
		},
		getOrdersFail (state, action) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	createOrderRequest,
	createOrderSuccess,
	createOrderFail,
	getOrdersRequest,
	getOrdersSuccess,
	getOrdersFail,
} = orderSlice.actions;

export default orderSlice.reducer;
