import axios from 'axios';
import { toast } from 'react-toastify';
import { orderCompleted } from '../../../../slice/cartSlice';
import { createOrder } from '../../../../actions/orderActions';
import { CardNumberElement } from '@stripe/react-stripe-js';

const showToast = (message, type) => {
	toast(message, {
		type: type,
		position: 'bottom-center',
	});
};

const handlePaymentResult = ({ result, dispatch, order, navigate }) => {
	if(result.error) {
		showToast(result.error.message, 'error');
		document.querySelector('#pay_btn').disabled = false;
	}
	else if(result.paymentIntent.status === 'succeeded') {
		showToast('Payment Success!', 'success');
		order.paymentInfo = {
			id: result.paymentIntent.id,
			status: result.paymentIntent.status,
		};
		dispatch(createOrder(order));
		dispatch(orderCompleted());
		showToast('Order Placed!', 'success');
		navigate('/');
	}
	else
		showToast('Please Try Again!', 'warning');
};

const buildCardPaymentDetails = (elements, user) => ({
	payment_method: {
		card: elements.getElement(CardNumberElement),
		billing_details: {
			name: user.name,
			email: user.email,
		},
	},
});

const submitHandler = async ({ stripe, elements, dispatch, user, total, order, navigate }) => {
	try {
		const { data } = await axios.post('/api/payment/process', { amount: total });
		const clientSecret = data.client_secret;

		const result = await stripe.confirmCardPayment(clientSecret,
			buildCardPaymentDetails(elements, user));

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
