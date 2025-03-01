import { Fragment } from 'react';
import MetaData from '@MetaData';
import useLoginForm from '../useLoginForm';
import useAuth from '../useAuth';
import Title from '../Title';
import RegisterForm from './RegisterForm';
import RegisterAccountMessage from './RegisterAccountMessage';

const Register = () => {
	const loginState = useLoginForm();

	useAuth();

	return (
		<Fragment>
			<MetaData title="Login"/>
			<div className="bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
				<Title title="Sign Up"/>
				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
					<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
						<RegisterForm { ...loginState }/>
					</div>
					<RegisterAccountMessage/>
				</div>
			</div>
		</Fragment>
	);
};

export default Register;
