import { Link } from 'react-router-dom';

const LoginAccountMessage = () =>
	<div className="mt-5 sm:mx-auto sm:w-full sm:max-w-md">
		<div className="bg-white py-4 px-4 shadow text-center sm:rounded-lg sm:px-6">
			New to TechStore?{ ' ' }
			<Link to="/register" className="text-primary-500">
				Create an account
			</Link>
		</div>
	</div>;

export default LoginAccountMessage;
