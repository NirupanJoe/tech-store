import { useDispatch } from 'react-redux';
import { resetPassword } from '../../../../actions/authActions';
import PasswordInput from '../PasswordInput';
import ErrorMessage from '../ErrorMessage';
import SubmitButton from '../SubmitButton';
import ConfirmPasswordInput from '../ConfirmPassword';
import { useParams } from 'react-router-dom';
import useSuccessMessageEffect from './useSuccessMessageEffect';

const ResetPasswordForm = (props) => {
	const dispatch = useDispatch();

	const { confirmPassword, password } = props;
	const { token } = useParams();

	useSuccessMessageEffect(props);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(resetPassword({ confirmPassword, password }, token));
	};

	return <form className="space-y-6" onSubmit={ handleSubmit }>
		<PasswordInput { ...props }/>
		<ConfirmPasswordInput { ...props }/>
		<ErrorMessage { ...props }/>
		<SubmitButton { ...props } label="Set Password"/>
	</form>;
};

export default ResetPasswordForm;
