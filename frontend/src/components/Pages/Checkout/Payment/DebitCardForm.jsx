import {
	useElements,
	useStripe,
} from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../../Button';
import CardFields from './CardFields';
import { getTotal } from '../../../../helpers/priceHelper';
import submitHandler from './submitHandler';

const getShippingAddress = ({ shippingInfo }) => ({
	address: `${ shippingInfo.firstName } ${ shippingInfo.lastName }, ${ shippingInfo.flatNo }, ${ shippingInfo.street }, ${ shippingInfo.landmark } ${ shippingInfo.city }, ${ shippingInfo.state }, ${ shippingInfo.pincode }`,
	city: shippingInfo.city,
	state: shippingInfo.state,
	postalCode: shippingInfo.pincode,
	phoneNo: shippingInfo.mobileNumber,
});

const useData = () => {
	const stripe = useStripe();
	const elements = useElements();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const cartState = useSelector((state) => state.cartState);
	const total = getTotal(cartState.items);
	const order = {
		orderItems: cartState.items,
		shippingAddress: getShippingAddress(cartState),
		totalPrice: total,
		paymentMethod: 'Debit Card',
	};

	return { stripe, elements, dispatch, cartState, total, order, navigate };
};

const DebitCardForm = () => {
	const data = useData();

	const handleSubmit = (e) => {
		e.preventDefault();
		document.querySelector('#pay_btn').disabled = true;

		submitHandler(data);
	};

	return <form onSubmit={ handleSubmit } className="bg-white shadow-lg rounded-lg px-4">
		<CardFields/>
		<Button id="pay_btn" type="submit" label="Confirm order and pay"/>
	</form>;
};

export default DebitCardForm;
