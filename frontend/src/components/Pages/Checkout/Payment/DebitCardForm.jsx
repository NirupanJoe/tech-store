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

const useData = () => {
	const stripe = useStripe();
	const elements = useElements();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { items } = useSelector(({ cartState }) => cartState);
	const { user } = useSelector(({ authState }) => authState);
	const total = getTotal(items);
	const order = {
		orderItems: items,
		total: total,
		paymentMethod: 'Debit Card',
	};

	return { stripe, elements, dispatch, user, total, order, navigate };
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
