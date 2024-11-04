import { useSelector } from 'react-redux';

const ErrorMessage = () => {
	const { error } = useSelector(({ authState }) => authState);

	return !!error
		&& <div className="text-red-500 text-sm">
			{ error }
		</div>;
};

export default ErrorMessage;
