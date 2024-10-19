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
		loginFailure (state, action) {
			state.isAuthenticated = false;
			state.loading = false;
			state.error = action.payload.error;
		},
	},
});

export const { loginRequest, loginSuccess, loginFailure } = authSlice.actions;

export default authSlice.reducer;
