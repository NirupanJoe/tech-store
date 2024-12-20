import { useState } from 'react';

const FormInput = ({ label, errorMessage, ...props }) => {
	const [focused, setFocused] = useState(false);
	const handleFocus = () => {
		setFocused(true);
	};

	return <div className="w-full">
		<label className="text-base">{ label }</label>
		<input
			className={ `form-input mt-0.5 appearance-none py-3 w-full px-2 border border-gray-500
				rounded-md shadow-sm placeholder-black-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm ` }
			type="text"
			{ ...props }
			onBlur={ handleFocus }
			// eslint-disable-next-line react/no-unknown-property
			focused={ focused.toString() }
		/>
		<span className="hidden text-red-500">{ errorMessage }</span>
	</div>;
};

export default FormInput;
