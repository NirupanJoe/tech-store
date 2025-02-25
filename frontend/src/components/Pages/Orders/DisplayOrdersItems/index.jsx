import DisplayOrdersItem from './DisplayOrdersItem';

const DisplayOrdersItems = ({ orders }) =>
	<div className="min-h-screen bg-gray-50">
		<main className="max-w-screen-2xl mx-auto px-4 md:px-8 py-4 md:py-8">
			<div className="space-y-4 md:space-y-8">
				{ orders.map(DisplayOrdersItem) }
			</div>
		</main>
	</div>;

export default DisplayOrdersItems;
