import axios from 'axios';
import { productsFail, productsRequest, productsSuccess } from '../slice/productsSlice';
import config from './config';

const options = { headers: { 'Cache-Control': 'no-cache' }};

export const getProducts = (page) => async (dispatch) => {
	const { productsPerPage } = config;

	try {
		dispatch(productsRequest());

		const response = await axios.get(`/api/products?page=${ page }&limit=${ productsPerPage }`, options);

		dispatch(productsSuccess(response.data));
	}
	catch (error) {
		dispatch(productsFail(error.response?.data?.message));
	}
};
