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
		updateOrderPaidRequest (state) {
			state.loading = false;
		},
		updateOrderPaidSuccess (state, action) {
			state.loading = false;
			state.orders = state.orders.map((order) =>
				(order._id === action.payload.id ? action.payload.order : order));
		},
		updateOrderPaidFail (state, action) {
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
	updateOrderPaidRequest,
	updateOrderPaidSuccess,
	updateOrderPaidFail,
} = orderSlice.actions;

export default orderSlice.reducer;
