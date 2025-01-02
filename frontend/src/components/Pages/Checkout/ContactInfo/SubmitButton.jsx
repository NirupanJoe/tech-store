import Button from '../../../Button';

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
		<Button
			disabled={ isDisabled }
			label="Continue to delivery options"
		/>
	);
};

export default SubmitButton;
