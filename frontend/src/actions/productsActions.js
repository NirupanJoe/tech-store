import axios from 'axios';
import { productsFail, productsRequest, productsSuccess } from '../slice/productsSlice';

const options = { headers: { 'Cache-Control': 'no-cache' }};

export const getProducts = () => async (dispatch) => {
	try {
		dispatch(productsRequest());

		const response = await axios.get('/api/products', options);

		dispatch(productsSuccess(response.data));
	}
	catch (error) {
		dispatch(productsFail(error.response?.data?.message));
	}
};
