import axios from 'axios';
import {
	createOrderRequest,
	createOrderSuccess,
	createOrderFail,
	getOrderRequest,
	getOrderSuccess,
	getOrderFail,
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
		dispatch(getOrderRequest());
		const { data } = await axios.get('/api/orders');

		dispatch(getOrderSuccess(data));
	}
	catch (error) {
		dispatch(getOrderFail(error.response.data.message));
	}
};
