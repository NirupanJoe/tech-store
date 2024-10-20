import { Fragment } from 'react';
import MetaData from '../../../../MetaData';
import useLoginForm from './useLoginForm';
import useAuth from './useAuth';
import LoginTitle from './LoginTitle';
import LoginForm from './LoginForm';

const Login = () => {
	const loginState = useLoginForm();

	useAuth();

	return (
		<Fragment>
			<MetaData title="Login"/>
			<div className="bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
				<LoginTitle/>
				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
					<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
						<LoginForm { ...loginState }/>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Login;
