import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../../../actions/authActions';
import EmailInput from '../EmailInput';
import ErrorMessage from '../ErrorMessage';
import SubmitButton from '../SubmitButton';
import NameInput from '../NameInput';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useInitForm = ({ user, setName, setEmail }) => {
	useEffect(() => {
		setName(user.name);
		setEmail(user.email);
	}, [user, setName, setEmail]);
};

const handleFormSubmit = ({ dispatch, navigate, name, email, isUpdated }) => (e) => {
	e.preventDefault();
	dispatch(updateProfile({ name, email }));
	if(isUpdated)
		navigate('/myPage');
};

const UpdateForm = (props) => {
	const { name, email, setName, setEmail } = props;
	const dispatch = useDispatch();
	const { user, isUpdated } = useSelector((state) => state.authState);
	const navigate = useNavigate();

	useInitForm({ user, setName, setEmail });

	return (
		<form
			className="space-y-6"
			onSubmit={ handleFormSubmit({ dispatch, navigate, name, email, isUpdated }) }
		>
			<NameInput { ...props }/>
			<EmailInput { ...props }/>
			<ErrorMessage { ...props }/>
			<SubmitButton { ...props } label="Update"/>
		</form>
	);
};

export default UpdateForm;
