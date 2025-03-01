import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ContactInfo from './ContactInfo';
import ViewOrder from './ViewOrder';
import MetaData from '@MetaData';

const Checkout = () => {
	const { items } = useSelector((state) => state.cartState);
	const navigate = useNavigate();

	useEffect(() => {
		if(items.length === 0)
			navigate('/cart');
	}, [items, navigate]);

	return <div className="container mx-auto px-1 py-8">
		<div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
			<MetaData title="Checkout"/>
			<ContactInfo/>
			<ViewOrder/>
		</div>
	</div>;
};

export default Checkout;
