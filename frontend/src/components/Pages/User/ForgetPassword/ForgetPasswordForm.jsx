import { useDispatch, useSelector } from 'react-redux';
import { clearAuthMessage, forgetPassword } from '../../../../actions/authActions';
import EmailInput from '../EmailInput';
import ErrorMessage from '../ErrorMessage';
import SubmitButton from '../SubmitButton';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const handleFormSubmit = (dispatch, email) => (e) => {
	e.preventDefault();
	dispatch(forgetPassword({ email }));
};

const useSuccessMessageEffect = (
	message, setEmail, dispatch,
) => {
	useEffect(() => {
		if(message) {
			toast(message, {
				type: 'success',
				position: 'bottom-center',
				onOpen: () => {
					setEmail('');
				},
				onClose: () => {
					dispatch(clearAuthMessage());
				},
			});
		}
	}, [message, setEmail, dispatch]);
};

const ForgetPasswordForm = ({ email, setEmail }) => {
	const dispatch = useDispatch();
	const { message } = useSelector((state) => state.authState);

	useSuccessMessageEffect(
		message, setEmail, dispatch,
	);

	return (
		<form
			className="space-y-6"
			onSubmit={ handleFormSubmit(dispatch, email) }
		>
			<EmailInput email={ email } setEmail={ setEmail }/>
			<ErrorMessage message={ message }/>
			<SubmitButton label="Send Email"/>
		</form>
	);
};

export default ForgetPasswordForm;
