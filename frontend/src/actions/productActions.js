import axios from 'axios';
import { productFail, productRequest, productSuccess } from '../slice/productSlice';

const options = { headers: { 'Cache-Control': 'no-cache' }};

export const getProduct = (id) => async (dispatch) => {
	try {
		dispatch(productRequest());

		const response = await axios.get(`/api/products/${ id }`, options);

		dispatch(productSuccess(response.data));
	}
	catch (error) {
		dispatch(productFail(error.response?.data?.message));
	}
};
