import { Fragment } from 'react';
import MetaData from '../../../../MetaData';
import useLoginForm from '../useLoginForm';
import Title from '../Title';
import UpdateForm from './updateForm';

const UpdateProfile = () => {
	const loginState = useLoginForm();

	return (
		<Fragment>
			<MetaData title="Update Profile"/>
			<div className="bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
				<Title title="Update Profile"/>
				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
					<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
						<UpdateForm { ...loginState }/>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default UpdateProfile;
