import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { googleAuth } from '../../../../actions/authActions';
import { toast } from 'react-toastify';

// eslint-disable-next-line object-shorthand
const withGoogleAuth = (dispatch) => ({
	handleSuccess: function ({ credential }) {
		try {
			const { email, name, sub: googleId } = jwtDecode(credential);

			dispatch(googleAuth({ email, name, googleId }));
		}
		catch (error) {
			console.error('Google Login decoding failed:', error);
			this.handleError();
		}
	},
	handleError: function () {
		toast('Google Login failed', {
			type: 'error',
			position: 'bottom-center',
		});
	},
});

const GoogleLoginButton = () => {
	const dispatch = useDispatch();
	const { handleSuccess, handleError } = withGoogleAuth(dispatch);

	return (
		<div className="w-full flex justify-center my-4">
			<GoogleLogin
				size="large"
				theme="filled_blue"
				auto_select={ true }
				useOneTap={ true }
				onSuccess={ handleSuccess }
				onError={ handleError }
			/>
		</div>
	);
};

export default GoogleLoginButton;
