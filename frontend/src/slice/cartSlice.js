import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		loading: false,
		items: localStorage.getItem('cartItems')
			? JSON.parse(localStorage.getItem('cartItems'))
			: [],
		contactDetails: null,
		deliveryOptions: null,
		payment: null,
		checkoutStep: 1,
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
		removeCartItem (state, action) {
			state.items = state.items.filter((item) => action.payload !== item.id);
			localStorage.setItem('cartItems', JSON.stringify(state.items));
		},
	},
});

export const {
	addCartItemRequest,
	addCartItemSuccess,
	addCartItemFail,
	removeCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
