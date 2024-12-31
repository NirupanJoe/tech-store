import ContactInfo from './ContactInfo';
import ViewOrder from './ViewOrder';

const Checkout = () =>
	<div className="container mx-auto px-1 py-8">
		<div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
			<ContactInfo/>
			<ViewOrder/>
		</div>
	</div>;

export default Checkout;
