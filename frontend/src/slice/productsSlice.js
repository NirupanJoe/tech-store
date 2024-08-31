import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
	name: 'products',
	initialState: { loading: false },
	reducers: {
		productsRequest: () =>
			({ loading: true }),
	},
	productsSuccess: (state, action) =>
		({ loading: false, products: action.payload.products }),
	productsFail: (state, action) =>
		({ loading: false, error: action.payload }),
});

export const { productsRequest, productsSuccess, productsFail } = productsSlice.actions;

export default productsSlice.reducer;
