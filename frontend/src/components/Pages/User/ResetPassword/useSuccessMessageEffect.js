import { toast } from 'react-toastify';
import { clearAuthMessage } from '../../../../actions/authActions';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const handleToastOpen = (setPassword, setConfirmPassword) => () => {
	setPassword('');
	setConfirmPassword('');
};

const handleToastClose = (dispatch, navigate) => () => {
	dispatch(clearAuthMessage());
	navigate('/');
};

const displaySuccessToast = (
	message, setPassword, setConfirmPassword, dispatch, navigate,
) => {
	toast(message, {
		type: 'success',
		position: 'bottom-center',
		onOpen: handleToastOpen(setPassword, setConfirmPassword),
		onClose: handleToastClose(dispatch, navigate),
	});
};

const useSuccessMessageEffect = ({ setPassword, setConfirmPassword }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { message } = useSelector((state) => state.authState);

	useEffect(() => {
		if(message) {
			displaySuccessToast(
				message, setPassword, setConfirmPassword, dispatch, navigate,
			);
		}
	}, [message, setPassword, setConfirmPassword, dispatch, navigate]);
};

export default useSuccessMessageEffect;
