import axios from 'axios';
import { productsFail, productsRequest, productsSuccess } from '../slice/productsSlice';
import config from './config';

const options = { headers: { 'Cache-Control': 'no-cache' }};

const generateQueryString = ({
	currentPage, category, keyword,
	productsPerPage, ...props
}) => {
	const queryParams = {
		page: currentPage,
		limit: productsPerPage,
		...keyword && { keyword },
		...category && { category },
		...props,
	};

	return new URLSearchParams(queryParams).toString();
};

export const getProducts = ({ currentPage, ...props }) => async (dispatch) => {
	const { productsPerPage } = config;
	const queryString = generateQueryString({ currentPage, productsPerPage, ...props });
	const link = `/api/products?${ queryString }`;

	try {
		dispatch(productsRequest());
		const response = await axios.get(link, options);

		dispatch(productsSuccess(response.data));
	}
	catch (error) {
		dispatch(productsFail(error.response?.data?.message));
	}
};
