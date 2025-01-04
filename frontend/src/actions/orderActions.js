import axios from 'axios';
import {
	createOrderRequest,
	createOrderSuccess,
	createOrderFail,
	getOrdersRequest,
	getOrdersSuccess,
	getOrdersFail,
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
		const { data } = await axios.get('/api/orders');

		dispatch(getOrdersSuccess(data));
	}
	catch (error) {
		dispatch(getOrdersFail(error.response.data.message));
	}
};
