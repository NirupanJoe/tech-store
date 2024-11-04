import axios from 'axios';
import { loginFail, loginRequest, loginSuccess, clearError } from '../slice/authSlice';

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
