import { useDispatch } from 'react-redux';
import { login } from '../../../../actions/authActions';
import EmailInput from '../EmailInput';
import PasswordInput from '../PasswordInput';
import ErrorMessage from '../ErrorMessage';
import SubmitButton from '../SubmitButton';
import { Link } from 'react-router-dom';

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
		<Link className="flex justify-end" to="/password/forget">Forget Password?</Link>
	</form>;
};

export default LoginForm;
