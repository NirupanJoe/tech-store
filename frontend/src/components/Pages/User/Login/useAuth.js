import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const navigatePrevRoute = -1;

const useAuth = () => {
	const navigate = useNavigate();
	const { isAuthenticated } = useSelector(({ authState }) => authState);

	useEffect(() => {
		if(isAuthenticated)
			navigate(navigatePrevRoute);
	}, [isAuthenticated, navigate]);
};

export default useAuth;
