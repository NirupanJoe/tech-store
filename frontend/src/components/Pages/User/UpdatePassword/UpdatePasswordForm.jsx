import { useDispatch, useSelector } from 'react-redux';
import { updatePassword } from '../../../../actions/authActions';
import PasswordInput from '../PasswordInput';
import ErrorMessage from '../ErrorMessage';
import SubmitButton from '../SubmitButton';
import OldPasswordInput from '../OldPasswordInput';
import { useNavigate } from 'react-router-dom';

const UpdatePasswordForm = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { oldPassword, password: newPassword } = props;
	const { isUpdated } = useSelector((state) => state.authState);

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(updatePassword({ oldPassword, newPassword }));

		if(isUpdated)
			navigate('/myPage');
	};

	return <form className="space-y-6" onSubmit={ handleSubmit }>
		<OldPasswordInput { ...props }/>
		<PasswordInput { ...props }/>
		<ErrorMessage { ...props }/>
		<SubmitButton { ...props } label="Update Password"/>
	</form>;
};

export default UpdatePasswordForm;
