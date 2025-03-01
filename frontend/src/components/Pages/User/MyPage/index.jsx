import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MetaData from '@MetaData';

const dateDisplayLength = 10;

const UserProfileImage = () =>
	<div className="w-full md:w-1/3 text-center mb-5 md:mb-0">
		<figure className="flex justify-center mb-2">
			<img
				className="w-24 h-24 rounded-full"
				src="/assets/profile-placeholder.png"
				alt="User avatar"
			/>
		</figure>
		<Link
			to="/updateProfile"
			className="mt-5 w-full py-2 px-4 text-white bg-primary-500
				rounded hover:bg-primary-600 transition-colors"
		>
			Edit Profile
		</Link>
	</div>;

const UserInfo = ({ label, value }) =>
	<div>
		<h4 className="font-semibold text-gray-800">{ label }</h4>
		<p className="text-gray-600">{ value }</p>
	</div>;

const UserProfileDetails = ({ user }) =>
	<div className="w-full grid md:justify-start justify-center md:w-1/2 my-5">
		<UserInfo label="Full Name" value={ user.name }/>
		<UserInfo label="Email Address" value={ user.email }/>
		<UserInfo label="Joined" value={ String(user.createdAt).substring(0, dateDisplayLength) }/>
		<UserActions/>
	</div>;

const UserActions = () =>
	<Link
		to="/updatePassword"
		className="mt-3 w-full py-2 px-4 text-white bg-primary-500
				rounded hover:bg-primary-600 transition-colors"
	>
		Change Password
	</Link>;

const MyPage = () => {
	const { user } = useSelector((state) => state.authState);

	return (
		<div className="flex flex-col items-center mt-5 md:flex-row md:justify-around md:space-x-4">
			<MetaData title="My Profile"/>
			<UserProfileImage/>
			<UserProfileDetails user={ user }/>
		</div>
	);
};

export default MyPage;
