import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
	initialState: {
		loading: false,
		orders: [],
		error: '',
	},
	name: 'order',
	reducers: {
		createRequestOrder (state) {
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
		getRequestOrders (state) {
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
	createRequestOrder,
	createOrderSuccess,
	createOrderFail,
	getRequestOrders,
	getOrdersSuccess,
	getOrdersFail,
} = orderSlice.actions;

export default orderSlice.reducer;
