import ViewOrder from '../ViewOrder/Index';
import ContactDetails from './ContactDetails';

const ContactInfo = () =>
	<div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
		<form>
			<ContactDetails/>
		</form>
		<ViewOrder/>
	</div>;

export default ContactInfo;
