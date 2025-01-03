import axios from 'axios';
import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import DebitCardForm from './DebitCardForm';

const Payment = () => {
	const [stripeApiKey, setStripeApiKey] = useState('');

	useEffect(() => {
		(async () => {
			const { data } = await axios.get('/api/stripeapikey');

			setStripeApiKey(data.stripeApiKey);
		})();
	}, []);

	return stripeApiKey
	&& <Elements stripe={ loadStripe(stripeApiKey) }>
		<DebitCardForm/>
	</Elements>;
};

export default Payment;
