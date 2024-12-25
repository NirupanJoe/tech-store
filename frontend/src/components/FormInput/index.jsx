import { useState } from 'react';

const FormInputContent = ({ label, errorMessage, focused, handleFocus, ...props }) =>
	<div className="w-full">
		<label className={ `text-base ${ props.disabled && 'text-gray-500' }` }>{ label }</label>
		<input
			className={ `form-input mt-0.5 appearance-none py-3 w-full px-2 border 
				rounded-md shadow-sm placeholder-black-400 sm:text-sm 
				${ props?.disabled
		? 'bg-gray-200 border-gray-300 cursor-not-allowed'
		: 'border-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500'
}` }
			type="text"
			{ ...props }
			onBlur={ handleFocus }
			// eslint-disable-next-line react/no-unknown-property
			focused={ focused.toString() }
		/>
		<span className="hidden text-red-500">{ errorMessage }</span>
	</div>;

const FormInput = ({ label, errorMessage, ...props }) => {
	const [focused, setFocused] = useState(false);
	const handleFocus = () => {
		setFocused(true);
	};

	return (
		<FormInputContent
			label={ label }
			errorMessage={ errorMessage }
			focused={ focused }
			handleFocus={ handleFocus }
			{ ...props }
		/>);
};

export default FormInput;
