import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../actions/authActions';
import { useNavigate } from 'react-router-dom';

const navigatePrevRoute = -1;

const Logout = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(logout());
		navigate(navigatePrevRoute);
	}, []);
};

export default Logout;
