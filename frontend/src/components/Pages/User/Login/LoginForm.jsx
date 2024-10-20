import { useDispatch } from 'react-redux';
import { login } from '../../../../actions/authActions';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import ErrorMessage from './ErrorMessage';
import SignInButton from './SignInButton';

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
		<SignInButton { ...props }/>
	</form>;
};

export default LoginForm;
