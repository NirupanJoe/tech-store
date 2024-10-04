import axios from 'axios';
import { productsFail, productsRequest, productsSuccess } from '../slice/productsSlice';
import config from './config';

const options = { headers: { 'Cache-Control': 'no-cache' }};

export const getProducts = ({ currentPage, keyword }) => async (dispatch) => {
	const { productsPerPage } = config;

	try {
		dispatch(productsRequest());
		let link = `/api/products?page=${ currentPage }&limit=${ productsPerPage }`;

		if(keyword)
			link += `&keyword=${ keyword }`;

		const response = await axios.get(link, options);

		dispatch(productsSuccess(response.data));
	}
	catch (error) {
		dispatch(productsFail(error.response?.data?.message));
	}
};
