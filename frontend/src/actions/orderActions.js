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
	processPaymentRequest,
	processPaymentFail,
} from '../slice/orderSlice';
import { toast } from 'react-toastify';

export const createOrder = (order) => async (dispatch) => {
	try {
		dispatch(createOrderRequest());
		const { data } = await axios.post('/api/orders', order);

		dispatch(createOrderSuccess(data));
	}
	catch (error) {
		dispatch(createOrderFail(error.message));
	}
};

export const getOrders = () => async (dispatch) => {
	try {
		dispatch(getOrdersRequest());

		const { data: { orders }} = await axios.get('/api/orders');

		dispatch(getOrdersSuccess(orders));
	}
	catch (error) {
		dispatch(getOrdersFail(error.message));
	}
};

const handlePaymentSuccess = ({	dispatch, order, paymentIntent }) => {
	order.paymentInfo = {
		id: paymentIntent.id,
		status: paymentIntent.status,
	};

	dispatch(createOrder(order));
	toast('Order Placed!', {
		type: 'success',
		position: 'bottom-center',
		onClose: () => {
			window.location.href = '/';
		},
	});
};

export const processPayment = ({ stripe, total, order, paymentDetails }) =>
	async (dispatch) => {
		try {
			dispatch(processPaymentRequest());
			const { data } = await axios.post('/api/payment/process', { amount: total });

			const response = await stripe.confirmCardPayment(data.client_secret, paymentDetails);

			const { paymentIntent } = response;

			(paymentIntent.status === 'succeeded')
				&& handlePaymentSuccess({ dispatch, order, paymentIntent });
		}
		catch {
			dispatch(processPaymentFail('Payment Failed!'));
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
