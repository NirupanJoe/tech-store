import { useDispatch } from 'react-redux';
import { login } from '../../../../actions/authActions';
import EmailInput from '../EmailInput';
import PasswordInput from '../PasswordInput';
import ErrorMessage from '../ErrorMessage';
import SubmitButton from '../SubmitButton';

const LoginForm = (props) => {
	const dispatch = useDispatch();
	const { email, password } = props;
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login({ email, password }));
	};

	return <form className="space-y-6" onSubmit={ handleSubmit }>
		<EmailInput { ...props }/>
		<PasswordInput { ...props }/>
		<ErrorMessage { ...props }/>
		<SubmitButton { ...props } label="Sign In"/>
	</form>;
};

export default LoginForm;
