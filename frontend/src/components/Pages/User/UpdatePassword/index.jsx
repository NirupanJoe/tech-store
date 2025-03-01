import { Fragment } from 'react';
import MetaData from '@MetaData';
import Title from '../Title';
import useLoginForm from '../useLoginForm';
import UpdatePasswordForm from './UpdatePasswordForm';

const UpdatePassword = () => {
	const loginState = useLoginForm();

	return <Fragment>
		<MetaData title="Update Password"/>
		<div className="bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<Title title="Update Password"/>
			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<UpdatePasswordForm { ...loginState }/>
				</div>
			</div>
		</div>
	</Fragment>;
};

export default UpdatePassword;
