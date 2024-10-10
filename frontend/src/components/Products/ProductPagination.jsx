import Pagination from 'react-js-pagination';
import config from '../../actions/config';

const ProductPagination = ({ currentPage, setCurrentPage, productsCount }) =>
	productsCount > config.productsPerPage
		&& <div className="mt-10 flex justify-center">
			<Pagination
				activePage={ currentPage }
				itemsCountPerPage={ config.productsPerPage }
				totalItemsCount={ productsCount }
				onChange={ (page) => setCurrentPage(page) }
				itemClass="inline-block mx-1"
				linkClass="px-2 py-1 sm:px-4 sm:py-2 border border-primary-500 rounded-full
					text-gray-600 hover:bg-primary-600 hover:text-white text-sm sm:text-base"
				activeLinkClass="bg-primary-600 text-white"
				disabledClass="opacity-50 cursor-not-allowed"
			/>
		</div>;

export default ProductPagination;
