import { CardCvcElement, CardExpiryElement, CardNumberElement } from '@stripe/react-stripe-js';

const cardFields = [
	{ id: 'card_num_field', label: 'Card Number', Component: CardNumberElement },
	{ id: 'card_exp_field', label: 'Card Expiry', Component: CardExpiryElement },
	{ id: 'card_cvc_field', label: 'Card CVC', Component: CardCvcElement },
];

const CardFields = () => cardFields.map(({ id, label, Component }) =>
	<div key={ id } className="mb-4">
		<label
			htmlFor={ id }
			className="block text-sm font-medium text-gray-700 mb-2.5"
		>
			{ label }
		</label>
		<Component
			id={ id }
			className="block w-full px-4 pt-4 pb-3 border border-gray-300 rounded-lg
					shadow-sm focus:ring-blue-500 focus:border-blue-500"
		/>
	</div>);

export default CardFields;
