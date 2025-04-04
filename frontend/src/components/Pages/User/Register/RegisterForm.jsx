import { useDispatch } from 'react-redux';
import { register } from '../../../../actions/authActions';
import EmailInput from '../EmailInput';
import PasswordInput from '../PasswordInput';
import ErrorMessage from '../ErrorMessage';
import SubmitButton from '../SubmitButton';
import NameInput from '../NameInput';

const RegisterForm = (props) => {
	const dispatch = useDispatch();
	const { name, email, password } = props;
	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(register({ name, email, password }));
	};

	return <form className="space-y-6" onSubmit={ handleSubmit }>
		<NameInput { ...props }/>
		<EmailInput { ...props }/>
		<PasswordInput { ...props }/>
		<ErrorMessage { ...props }/>
		<SubmitButton { ...props } label="Sign Up"/>
	</form>;
};

export default RegisterForm;
