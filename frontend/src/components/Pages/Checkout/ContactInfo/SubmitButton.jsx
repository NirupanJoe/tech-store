const SubmitButton = ({ formData, inputInfos, deliveryInfos }) => {
	const isFieldValid = (field) => {
		const value = formData[field.name];
		const pattern = field.pattern ? new RegExp(field.pattern) : null;

		return value && (!pattern || pattern.test(value));
	};

	const areAllFieldsValid = (fields) =>
		fields.filter((field) => field.required).every((field) => isFieldValid(field));

	const isDisabled = !(areAllFieldsValid(inputInfos) && areAllFieldsValid(deliveryInfos));

	return (
		<button
			disabled={ isDisabled }
			className={ `md:w-80 w-full h-10 py-2 my-6 rounded-full text-white
				${ isDisabled ? 'bg-neutral-300 text-neutral-400' : 'bg-primary-500' }` }
		>
			Continue to delivery options
		</button>
	);
};

export default SubmitButton;
