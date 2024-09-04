import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
	name: 'products',
	initialState: { loading: false, products: [], error: '' },
	reducers: {
		productsRequest: (state) => {
			state.loading = true;
		},
		productsSuccess: (state, action) =>
			({ ...state, loading: false, products: action.payload.products }),
		productsFail: (state, action) =>
			({ ...state, loading: false, error: action.payload }),
	},
});

export const { productsRequest, productsSuccess, productsFail } = productsSlice.actions;

export default productsSlice.reducer;
