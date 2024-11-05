import axios from 'axios';
import {
	loginFail,
	loginRequest,
	loginSuccess,
	clearError,
	registerRequest,
	registerFail,
	registerSuccess,
} from '../slice/authSlice';

export const login = ({ email, password }) => async (dispatch) => {
	try {
		dispatch(loginRequest());
		const { data } = await axios.post('/api/users/login', { email, password });

		dispatch(loginSuccess({ user: data }));
	}
	catch (error) {
		dispatch(loginFail({ error: error.response.data.message }));
	}
};

export const clearAuthError = () => (dispatch) => {
	dispatch(clearError());
};

export const register = (user) => async (dispatch) => {
	try {
		const config = { };

		dispatch(registerRequest());
		const { data } = await axios.post(
			'/api/users/register', user, config,
		);

		dispatch(registerSuccess(data));
	}
	catch (err) {
		dispatch(registerFail({ error: err.response.data.message }));
	}
};
