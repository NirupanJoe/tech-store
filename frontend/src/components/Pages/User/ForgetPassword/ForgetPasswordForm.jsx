import { useDispatch } from 'react-redux';
import { forgetPassword } from '../../../../actions/authActions';
import EmailInput from '../EmailInput';
import ErrorMessage from '../ErrorMessage';
import SubmitButton from '../SubmitButton';

const handleFormSubmit = ({ dispatch, email }) => (e) => {
	e.preventDefault();
	dispatch(forgetPassword({ email }));
};

const ForgetPasswordForm = (props) => {
	const { email } = props;
	const dispatch = useDispatch();

	return (
		<form
			className="space-y-6"
			onSubmit={ handleFormSubmit({ dispatch, email }) }
		>
			<EmailInput { ...props }/>
			<ErrorMessage { ...props }/>
			<SubmitButton { ...props } label="Send Email"/>
		</form>
	);
};

export default ForgetPasswordForm;
