import axios from 'axios';
import { loginFailed, loginRequest, loginSuccess } from '../slice/loginSlice';

export const login = ({ email, password }) => async (dispatch) => {
	try {
		dispatch(loginRequest());
		const { data } = await axios.post('/api/login', { email, password });

		dispatch(loginSuccess({ user: data }));
	}
	catch (error) {
		dispatch(loginFailed({ error: error.response.data.message }));
	}
};
