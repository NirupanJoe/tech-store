import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearAuthError } from '../../../actions/authActions';

const navigatePrevRoute = -1;

const useAuth = () => {
	const navigate = useNavigate();
	const { isAuthenticated } = useSelector(({ authState }) => authState);
	const dispatch = useDispatch();

	useEffect(() => {
		if(isAuthenticated)
			navigate(navigatePrevRoute);
		else
			dispatch(clearAuthError());

		return () => {
			dispatch(clearAuthError());
		};
	}, [isAuthenticated, navigate, dispatch]);
};

export default useAuth;
