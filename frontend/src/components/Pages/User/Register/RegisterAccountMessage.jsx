import { Link } from 'react-router-dom';

const RegisterAccountMessage = () =>
	<div className="mt-5 sm:mx-auto sm:w-full sm:max-w-md">
		<div className="bg-white py-4 px-4 shadow text-center sm:rounded-lg sm:px-6">
			Already have an account? <Link to="/login" className="text-primary-500">
				Sign in →
			</Link>
		</div>
	</div>;

export default RegisterAccountMessage;
