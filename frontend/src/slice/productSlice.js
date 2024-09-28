import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
	name: 'product',
	initialState: { loading: false, product: undefined, error: '' },
	reducers: {
		productRequest: (state) => {
			state.loading = true;
		},
		productSuccess: (state, action) =>
			({ ...state, loading: false, product: action.payload.product }),
		productFail: (state, action) =>
			({ ...state, loading: false, error: action.payload }),
	},
});

export const { productRequest, productSuccess, productFail } = productSlice.actions;

export default productSlice.reducer;
