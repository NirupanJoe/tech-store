import axios from 'axios';
import {
	loginFail,
	loginRequest,
	loginSuccess,
	clearError,
	registerRequest,
	registerFail,
	registerSuccess,
	loadUserRequest,
	loadUserSuccess,
	loadUserFail,
	logoutRequest,
	logoutSuccess,
	logoutFail,
	updateProfileRequest,
	updateProfileSuccess,
	updateProfileFail,
} from '../slice/authSlice';

export const login = ({ email, password }) => async (dispatch) => {
	try {
		dispatch(loginRequest());
		const { data: { user }} = await axios.post('/api/users/login', { email, password });

		dispatch(loginSuccess({ user }));
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

export const loadUser = () => async (dispatch) => {
	try {
		dispatch(loadUserRequest());

		const { data: { user }} = await axios.get('/api/users/profile');

		dispatch(loadUserSuccess({ user }));
	}
	catch (err) {
		dispatch(loadUserFail({ error: err.response.data.message }));
	}
};

export const logout = () => async (dispatch) => {
	try {
		dispatch(logoutRequest());

		await axios.get('/api/users/logout');

		dispatch(logoutSuccess());
	}
	catch (err) {
		dispatch(logoutFail({ error: err.response.data.message }));
	}
};

export const updateProfile = (updatedUser) => async (dispatch) => {
	try {
		dispatch(updateProfileRequest());

		const { data: { user }} = await axios.put('/api/users/profile', updatedUser);

		dispatch(updateProfileSuccess({ user }));
	}
	catch (err) {
		dispatch(updateProfileFail({ error: err.response.data.message }));
	}
};
