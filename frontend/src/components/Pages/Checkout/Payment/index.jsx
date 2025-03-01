import axios from 'axios';
import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import DebitCardContainer from './DebitCardContainer';
import MetaData from '@MetaData';

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
		<MetaData title="Payment | Checkout"/>
		<DebitCardContainer/>
	</Elements>;
};

export default Payment;
