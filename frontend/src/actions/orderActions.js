import axios from 'axios';
import {
	createOrderRequest,
	createOrderSuccess,
	createOrderFail,
	getOrdersRequest,
	getOrdersSuccess,
	getOrdersFail,
	updateOrderPaidRequest,
	updateOrderPaidSuccess,
	updateOrderPaidFail,
} from '../slice/orderSlice';

export const createOrder = (order) => async (dispatch) => {
	try {
		dispatch(createOrderRequest());
		const { data } = await axios.post('/api/orders', order);

		dispatch(createOrderSuccess(data));
	}
	catch (error) {
		dispatch(createOrderFail(error.response.data.message));
	}
};

export const getOrders = () => async (dispatch) => {
	try {
		dispatch(getOrdersRequest());
		const { data: { orders }} = await axios.get('/api/orders');

		dispatch(getOrdersSuccess(orders));
	}
	catch (error) {
		dispatch(getOrdersFail(error.response.data.message));
	}
};

export const updateOrderPaid = (id, paymentInfo) => async (dispatch) => {
	try {
		dispatch(updateOrderPaidRequest());
		const { data: { order }} = await axios.put(`/api/orders/paid/${ id }`, paymentInfo);

		dispatch(updateOrderPaidSuccess(order));
	}
	catch (error) {
		dispatch(updateOrderPaidFail(error.response.data.message));
	}
};
