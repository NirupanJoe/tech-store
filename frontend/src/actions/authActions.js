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
	updatePasswordRequest,
	updatePasswordSuccess,
	updatePasswordFail,
	forgetPasswordRequest,
	forgetPasswordSuccess,
	forgetPasswordFail,
	resetPasswordRequest,
	resetPasswordSuccess,
	resetPasswordFail,
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

		const { data: { user }} = await axios.put('/api/users/update', updatedUser);

		dispatch(updateProfileSuccess({ user }));
	}
	catch (err) {
		dispatch(updateProfileFail({ error: err.response.data.message }));
	}
};

export const updatePassword = (data) => async (dispatch) => {
	try {
		dispatch(updatePasswordRequest());

		await axios.put('/api/users/password/update', data);

		dispatch(updatePasswordSuccess());
	}
	catch (err) {
		dispatch(updatePasswordFail({ error: err.response.data.message }));
	}
};

export const forgetPassword = (userData) => async (dispatch) => {
	try {
		dispatch(forgetPasswordRequest());

		const { data: { message }} = await axios.post('/api/users/password/forget', userData);

		dispatch(forgetPasswordSuccess(message));
	}
	catch (err) {
		dispatch(forgetPasswordFail({ error: err.response.data.message }));
	}
};

export const resetPassword = (userData, token) => async (dispatch) => {
	try {
		dispatch(resetPasswordRequest());
		const { data } = await axios.post(`/api/users/password/reset/${ token }`, userData);

		dispatch(resetPasswordSuccess(data));
	}
	catch (err) {
		dispatch(resetPasswordFail({ error: err.response.data.message }));
	}
};
