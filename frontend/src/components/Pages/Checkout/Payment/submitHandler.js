import { processPayment } from '../../../../actions/orderActions';
import { CardNumberElement } from '@stripe/react-stripe-js';

const buildCardPaymentDetails = (elements, shippingInfo) => ({
	payment_method: {
		card: elements.getElement(CardNumberElement),
		billing_details: {
			name: `${ shippingInfo.firstName } ${ shippingInfo.lastName }`,
			email: shippingInfo.email,
		},
	},
});

const submitHandler = async ({ dispatch, cartState, elements, ...props }) => {
	const paymentDetails = buildCardPaymentDetails(elements, cartState.shippingInfo);

	await dispatch(processPayment({ paymentDetails, ...props }));
};

export default submitHandler;
