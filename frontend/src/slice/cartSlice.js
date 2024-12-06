import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		loading: false,
		items: localStorage.getItem('cartItems')
			? JSON.parse(localStorage.getItem('cartItems'))
			: [],
	},
	reducers: {
		addCartItemRequest (state) {
			state.loading = true;
		},
		addCartItemSuccess (state, action) {
			state.loading = false;
			state.items = [...state.items, action.payload];
			localStorage.setItem('cartItems', JSON.stringify(state.items));
		},
		addCartItemFail (state, action) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	addCartItemRequest,
	addCartItemSuccess,
	addCartItemFail,
} = cartSlice.actions;

export default cartSlice.reducer;
