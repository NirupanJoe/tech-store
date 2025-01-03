import axios from 'axios';
import { toast } from 'react-toastify';
import {
	CardNumberElement,
	useElements,
	useStripe,
} from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../Button';
import CardFields from './CardFields';
import { getTotal } from '../../../../helpers/priceHelper';
import { orderCompleted } from '../../../../slice/cartSlice';

// eslint-disable-next-line max-lines-per-function
const DebitCardForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const dispatch = useDispatch();

	const { items } = useSelector(({ cartState }) => cartState);
	const { user } = useSelector(({ authState }) => authState);
	const total = getTotal(items);

	const order = {
		orderItems: items,
		total: total,
		paymentMethod: 'Debit Card',
	};

	// eslint-disable-next-line max-lines-per-function, max-statements
	const submitHandler = async (e) => {
		e.preventDefault();
		document.querySelector('#pay_btn').disabled = true;
		try {
			const { data } = await axios.post('/api/payment/process', { amount: total });
			const clientSecret = data.client_secret;

			const result = await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardNumberElement),
					billing_details: {
						name: user.name,
						email: user.email,
					},
				},
			});

			if(result.error) {
				toast(result.error.message, {
					type: 'error',
					position: 'bottom-center',
				});
				document.querySelector('#pay_btn').disabled = false;
			}
			else if(result.paymentIntent.status === 'succeeded') {
				toast('Payment Success!', {
					type: 'success',
					position: 'bottom-center',
				});
				order.paymentInfo = {
					id: result.paymentIntent.id,
					status: result.paymentIntent.status,
				};
				dispatch(orderCompleted());
				// dispatch(createOrder(order));

				// navigate('/order/success');
				toast('Order Placed!', {
					type: 'success',
					position: 'bottom-center',
				});
			}
			else {
				toast('Please Try again!', {
					type: 'warning',
					position: 'bottom-center',
				});
			}
		}
		catch (error) {
			toast(error.response.data.message, {
				type: 'error',
				position: 'bottom-center',
			});
		}
	};

	return <div className="flex justify-center items-center bg-gray-50">
		<div className="w-full max-w-md">
			<form onSubmit={ submitHandler } className="bg-white shadow-lg rounded-lg p-6">
				<h1 className="text-2xl font-semibold mb-6 text-gray-800">Debit Card</h1>
				<CardFields/>
				<Button
					id="pay_btn"
					type="submit"
					label="Confirm order and pay"
				/>
			</form>
		</div>
	</div>;
};

export default DebitCardForm;
