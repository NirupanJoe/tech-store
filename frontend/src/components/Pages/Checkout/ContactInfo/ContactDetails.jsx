import { Fragment, useState } from 'react';
import axios from 'axios';
import FormInput from '../../../FormInput';

const initialFormData = {
	firstName: '',
	lastName: '',
	mobileNumber: '',
	alternativeNumber: '',
	email: '',
	pincode: '',
	flatNo: '',
	street: '',
	city: '',
	state: '',
};

const inputInfos = [
	{
		type: 'text',
		name: 'firstName',
		label: 'First Name',
		pattern: '^[A-Za-z]{0,30}',
		errorMessage: 'The First Name field format is invalid.',
		required: true,
	},
	{
		type: 'text',
		name: 'lastName',
		label: 'Last Name',
		pattern: '^[A-Za-z]{0,30}',
		errorMessage: 'The Last Name field format is invalid.',
	},
	{
		type: 'tel',
		name: 'mobileNumber',
		label: 'Mobile Number',
		required: true,
		pattern: '^[6-9][0-9]{9}$',
		errorMessage: 'The Mobile Number field format is invalid.',
		maxLength: 10,
		inputMode: 'numeric',
	},
	{
		type: 'tel',
		name: 'alternativeNumber',
		label: 'Alternative Number',
		pattern: '^[6-9][0-9]{9}$',
		errorMessage: 'The Alternative Number field format is invalid.',
		maxLength: 10,
		inputMode: 'numeric',
	},
	{
		type: 'email',
		name: 'email',
		label: 'Email Address',
		required: true,
		pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
		errorMessage: 'The Email Address field format is invalid.',
		maxLength: 254,
		inputMode: 'email',
	},
];

const deliveryInfos = [
	{
		type: 'text',
		name: 'pincode',
		label: 'Pincode*',
		required: true,
		pattern: '^[0-9]{6}$',
		errorMessage: 'The Pincode field format is invalid.',
		maxLength: 6,
		inputMode: 'numeric',
	},
	{
		type: 'text',
		name: 'flatNo',
		label: 'Flat/Home No*',
		required: true,
		pattern: '^[A-Za-z0-9]{0,30}',
		errorMessage: 'The Flat/Home No field format is invalid.',
	},
	{
		type: 'text',
		name: 'street',
		label: 'Street/Locality*',
		required: true,
		pattern: '^[A-Za-z0-9]{0,30}',
		errorMessage: 'The Street/Locality field format is invalid.',
	},
	{
		type: 'text',
		name: 'city',
		label: 'City*',
		required: true,
		pattern: '^[A-Za-z]{0,30}',
		errorMessage: 'The City field format is invalid.',
		disabled: true,
	},
	{
		type: 'text',
		name: 'state',
		label: 'State*',
		required: true,
		pattern: '^[A-Za-z]{0,30}',
		errorMessage: 'The State field format is invalid.',
		disabled: true,
	},
	{
		type: 'text',
		name: 'landmark',
		label: 'Landmark',
		pattern: '^[A-Za-z0-9]{0,30}',
		errorMessage: 'The Landmark field format is invalid.',
	},
];

const SectionHeader = ({ title, className }) =>
	<h1 className={ `text-2xl font-medium mb-6 text-gray-800 ${ className }` }>{ title }</h1>;

const InputGrid = ({ inputs, formData, onChange }) =>
	<div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
		{ inputs.map((inputProps) =>
			<FormInput
				key={ inputProps.name }
				{ ...inputProps }
				value={ formData[inputProps.name] }
				onChange={ onChange }
			/>) }
	</div>;

const fetchLocationDetails = async (pincode) => {
	try {
		const { data } = await axios(`https://api.postalpincode.in/pincode/${ pincode }`);

		if(data[0].Status === 'Success') {
			const { District: city, State: state } = data[0].PostOffice[0];

			return { city, state };
		}
		return { city: '', state: '' };
	}
	catch (error) {
		console.error('Error fetching location details:', error);
		return { city: '', state: '' };
	}
};

const updateFormData = ({ setFormData, name, value }) => {
	setFormData((prev) => ({ ...prev, [name]: value }));
};

const handlePincodeChange = async ({ e, value, setFormData }) => {
	if(value.length === e.target.maxLength) {
		const locationDetails = await fetchLocationDetails(value);

		setFormData((prev) => ({ ...prev, ...locationDetails }));
	}
	else
		setFormData((prev) => ({ ...prev, city: '', state: '' }));
};

const ContactDetailsSection = ({ formData, handleInputChange }) =>
	<Fragment>
		<SectionHeader title="1. Contact Details" className="pb-4"/>
		<InputGrid inputs={ inputInfos } formData={ formData } onChange={ handleInputChange }/>
	</Fragment>;

const DeliveryAddressSection = ({ formData, handleInputChange }) =>
	<Fragment>
		<SectionHeader title="Delivery Address" className="mt-6"/>
		<InputGrid
			inputs={ deliveryInfos }
			formData={ formData }
			onChange={ handleInputChange }
		/>
	</Fragment>;

const ContactDetails = () => {
	const [formData, setFormData] = useState(initialFormData);

	const handleInputChange = async (e) => {
		const { name, value } = e.target;

		updateFormData({ formData, setFormData, name, value });

		if(name === 'pincode')
			await handlePincodeChange({ value, setFormData, e });
	};

	return (
		<Fragment>
			<ContactDetailsSection formData={ formData } handleInputChange={ handleInputChange }/>
			<DeliveryAddressSection formData={ formData } handleInputChange={ handleInputChange }/>
		</Fragment>
	);
};

export default ContactDetails;
