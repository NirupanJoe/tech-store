import { useState } from 'react';
import FormInput from '../../../FormInput';

const initialFormData = {
	firstName: '',
	lastName: '',
	mobileNumber: '',
	alternativeNumber: '',
	email: '',
};

const inputs = [
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

const ContactDetails = () => {
	const [formData, setFormData] = useState(initialFormData);

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return <div>
		<h1 className="text-2xl font-bold mb-6 pb-4 text-gray-800">
			1.Contact Details
		</h1>
		<div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
			{ inputs.map((inputProps) =>
				<FormInput
					key={ inputProps.name }
					{ ...inputProps }
					value={ formData[inputProps.name] }
					onChange={ onChange }
				/>) }
		</div>
	</div>;
};

export default ContactDetails;
