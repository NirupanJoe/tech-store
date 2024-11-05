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
			state.isAuthenticated = false;
			state.error = action.payload.error;
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
} = authSlice.actions;

export default authSlice.reducer;
