import { useSelector } from 'react-redux';

const SubmitButton = ({ label }) => {
	const { loading } = useSelector(({ authState }) => authState);

	return <div>
		<button
			disabled={ loading }
			type="submit"
			className="w-full flex justify-center py-2 px-4 border border-transparent
					rounded-md shadow-sm font-medium text-white bg-blue-600 hover:bg-blue-700
					focus:outline-none text-sm focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
		>
			{ label }
		</button>
	</div>;
};

export default SubmitButton;
