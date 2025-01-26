import axios from 'axios';
import { toast } from 'react-toastify';
import { orderCompleted } from '../../../../slice/cartSlice';
import { createOrder } from '../../../../actions/orderActions';
import { CardNumberElement } from '@stripe/react-stripe-js';

const showToast = (
	message, type, options = {},
) => {
	toast(message, {
		type: type,
		position: 'bottom-center',
		...options,
	});
};

const handleError = (error) => {
	showToast(error.message, 'error');
	document.querySelector('#pay_btn').disabled = false;
};

const handlePaymentSuccess = ({ paymentIntent, order, dispatch, navigate }) => {
	showToast('Payment Success!', 'success');

	order.paymentInfo = {
		id: paymentIntent.id,
		status: paymentIntent.status,
	};

	dispatch(createOrder(order));
	showToast(
		'Order Placed!', 'success', {
			onClose: () => {
				navigate('/');
				dispatch(orderCompleted());
			},
		},
	);
};

const handlePaymentFailure = () => {
	showToast('Please Try Again!', 'warning');
};

const handlePaymentResult = ({ result, dispatch, order, navigate }) => {
	const { error, paymentIntent } = result;

	if(error)
		handleError(error);
	else if(paymentIntent.status === 'succeeded')
		handlePaymentSuccess({ paymentIntent, order, dispatch, navigate });
	else
		handlePaymentFailure();
};

const buildCardPaymentDetails = (elements, shippingInfo) => ({
	payment_method: {
		card: elements.getElement(CardNumberElement),
		billing_details: {
			name: `${ shippingInfo.firstName } ${ shippingInfo.lastName }`,
			email: shippingInfo.email,
		},
	},
});

const submitHandler = async ({ stripe, elements, dispatch, cartState, total, order, navigate }) => {
	try {
		const { data } = await axios.post('/api/payment/process', { amount: total });
		const clientSecret = data.client_secret;

		const result = await stripe.confirmCardPayment(clientSecret,
			buildCardPaymentDetails(elements, cartState.shippingInfo));

		handlePaymentResult({ dispatch, order, result, navigate });
	}
	catch (error) {
		toast(error.response.data.message, {
			type: 'error',
			position: 'bottom-center',
		});
	}
};

export default submitHandler;
