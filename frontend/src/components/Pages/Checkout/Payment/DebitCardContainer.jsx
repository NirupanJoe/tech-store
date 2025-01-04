import DebitCardForm from './DebitCardForm';

const DebitCardContainer = () =>
	<div className="flex justify-center items-center bg-gray-50">
		<div className="w-full max-w-md">
			<h1 className="text-2xl font-semibold px-4 py-2 text-gray-800">Debit Card</h1>
			<DebitCardForm/>
		</div>
	</div>;

export default DebitCardContainer;
