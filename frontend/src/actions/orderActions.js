import axios from 'axios';
import { toast } from 'react-toastify';
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

const handlePaymentSuccess = ({	dispatch, order, paymentIntent, navigate }) => {
	order.paymentInfo = {
		id: paymentIntent.id,
		status: paymentIntent.status,
	};

	dispatch(createOrder(order));
	toast('Order Placed!', {
		type: 'success',
		position: 'bottom-center',
		onClose: () => {
			navigate('/orderPlaced');
		},
	});
};

export const processPayment = ({ stripe, total, paymentDetails, ...rest }) =>
	async (dispatch) => {
		try {
			dispatch(processPaymentRequest());
			const { data } = await axios.post('/api/payment/process', { amount: total });

			const response = await stripe.confirmCardPayment(data.client_secret, paymentDetails);

			const { paymentIntent } = response;

			(paymentIntent.status === 'succeeded')
				&& handlePaymentSuccess({ dispatch, paymentIntent, ...rest });
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
