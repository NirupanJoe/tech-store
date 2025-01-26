import { Link } from 'react-router-dom';

const ErrorHeading = () =>
	<h1 className="text-9xl font-extrabold text-blue-600 drop-shadow-md">404</h1>;

const ErrorMessage = () =>
	<>
		<p className="mt-4 text-2xl font-semibold">
			Oops! The page you&apos;re looking for doesn&apos;t exist.
		</p>
		<p className="mt-2 text-gray-600">
			It seems you’ve ventured off the map. Let’s get you back on track!
		</p>
	</>;

const GoHomeButton = () =>
	<div className="mt-6">
		<Link
			to="/"
			className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full
				shadow-lg transition-all duration-300"
		>
			Go Home
		</Link>
	</div>;

const ErrorImage = () =>
	<div className="mt-10">
		<img
			src="/assets/oops.webp"
			alt="Lost"
			className="w-96 mx-auto"
		/>
	</div>;

const NotFound = () =>
	<div className="flex flex-col items-center justify-center h-screen
		bg-gradient-to-r from-blue-100 to-blue-300 text-gray-800"
	>
		<ErrorHeading/>
		<ErrorMessage/>
		<GoHomeButton/>
		<ErrorImage/>
	</div>;

export default NotFound;
