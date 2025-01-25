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
		showToast(
			'Order Placed!', 'success', { onClose: () => navigate('/') },
		);
	}
	else
		showToast('Please Try Again!', 'warning');
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
