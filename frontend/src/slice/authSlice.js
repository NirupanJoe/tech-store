import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		loading: false,
		isAuthenticated: false,
	},
	reducers: {
		loginRequest (state) {
			state.loading = true;
		},
		loginSuccess (state, action) {
			state.isAuthenticated = true;
			state.loading = false;
			state.user = action.payload.user;
		},
		loginFail (state, action) {
			state.isAuthenticated = false;
			state.loading = false;
			state.error = action.payload.error;
		},
		clearError (state) {
			state.error = null;
		},
		registerRequest (state) {
			state.loading = true;
		},
		registerSuccess (state, action) {
			state.loading = false;
			state.isAuthenticated = true;
			state.user = action.payload.user;
		},
		registerFail (state, action) {
			state.isAuthenticated = false;
			state.loading = false;
			state.error = action.payload.error;
		},
		loadUserRequest (state) {
			state.loading = true;
			state.isAuthenticated = false;
		},
		loadUserSuccess (state, action) {
			state.loading = false;
			state.isAuthenticated = true;
			state.user = action.payload.user;
		},
		loadUserFail (state, action) {
			state.loading = false;
			state.isAuthenticated = false;
			state.error = action.payload.error;
		},
		logoutRequest (state) {
			state.loading = true;
			state.isAuthenticated = false;
		},
		logoutSuccess (state) {
			state.loading = false;
			state.isAuthenticated = false;
			state.user = null;
		},
		logoutFail (state, action) {
			state.loading = false;
			state.isAuthenticated = false;
			state.error = action.payload.error;
		},
		updateProfileRequest (state) {
			state.loading = true;
			state.isUpdated = false;
		},
		updateProfileSuccess (state, action) {
			state.loading = false;
			state.isAuthenticated = true;
			state.user = action.payload.user;
			state.isUpdated = true;
		},
		updateProfileFail (state, action) {
			state.isAuthenticated = false;
			state.loading = false;
			state.error = action.payload.error;
		},
		updatePasswordRequest (state) {
			state.isAuthenticated = true;
			state.loading = true;
			state.isUpdated = false;
		},
		updatePasswordSuccess (state) {
			state.loading = false;
			state.isAuthenticated = true;
			state.isUpdated = true;
		},
		updatePasswordFail (state, action) {
			state.loading = false;
			state.isAuthenticated = false;
			state.error = action.payload.error;
		},
		forgetPasswordRequest (state) {
			state.loading = true;
		},
		forgetPasswordSuccess (state, action) {
			state.loading = false;
			state.message = action.payload;
		},
		forgetPasswordFail (state, action) {
			state.loading = false;
			state.error = action.payload.error;
		},
		resetPasswordRequest (state) {
			state.loading = true;
		},
		resetPasswordSuccess (state, action) {
			state.loading = false;
			state.isAuthenticated = true;
			state.user = action.payload.user;
			state.message = action.payload.message;
		},
		resetPasswordFail (state, action) {
			state.loading = false;
			state.error = action.payload.error;
		},
		clearMessage (state) {
			state.message = undefined;
		},
	},
});

export const {
	loginRequest,
	loginSuccess,
	loginFail,
	clearError,
	registerRequest,
	registerSuccess,
	registerFail,
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
	clearMessage,
} = authSlice.actions;

export default authSlice.reducer;
