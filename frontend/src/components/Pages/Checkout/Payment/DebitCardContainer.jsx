import { useEffect } from 'react';
import DebitCardForm from './DebitCardForm';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Loader from '../../../Loader';

const DebitCardContainer = () => {
	const { error, loading } = useSelector((state) => state.orderState);

	useEffect(() => {
		error
			&& toast(error, {
				type: 'error',
				position: 'bottom-center',
			});
	}, [error]);

	return <div className="flex justify-center items-center bg-gray-50">
		<div className="w-full max-w-md">
			<h1 className="text-2xl font-semibold px-4 py-2 text-gray-800">Debit Card</h1>
			{ loading && <Loader/> }
			<DebitCardForm/>
		</div>
	</div>;
};

export default DebitCardContainer;
