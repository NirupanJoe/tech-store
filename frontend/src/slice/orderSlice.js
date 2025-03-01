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
			state.error = '';
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
			state.error = '';
		},
		getOrdersFail (state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		updateOrderPaidRequest (state) {
			state.loading = true;
		},
		updateOrderPaidSuccess (state, action) {
			state.error = '';
			state.loading = false;
			state.orders = state.orders.map((order) =>
				(order._id === action.payload.id ? action.payload.order : order));
		},
		updateOrderPaidFail (state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		processPaymentRequest (state) {
			state.loading = true;
		},
		processPaymentSuccess (state) {
			state.loading = false;
			state.error = '';
		},
		processPaymentFail (state, action) {
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
	processPaymentRequest,
	processPaymentSuccess,
	processPaymentFail,
} = orderSlice.actions;

export default orderSlice.reducer;
