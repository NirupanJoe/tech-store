import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		loading: false,
		items: localStorage.getItem('cartItems')
			? JSON.parse(localStorage.getItem('cartItems'))
			: [],
		contactDetails: null,
		shippingInfo: null,
		payment: null,
		checkoutStep: 0,
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
		orderCompleted (state) {
			localStorage.removeItem('shippingInfo');
			localStorage.removeItem('cartItems');
			sessionStorage.removeItem('orderInfo');

			state.items = [];
			state.loading = false;
			state.shippingInfo = null;
			state.checkoutStep = 0;
		},
		addShippingInfo (state, action) {
			state.shippingInfo = action.payload;
		},
		checkoutStepIncrement (state) {
			state.checkoutStep += 1;
		},
	},
});

export const {
	addCartItemRequest,
	addCartItemSuccess,
	addCartItemFail,
	removeCartItem,
	orderCompleted,
	addShippingInfo,
	checkoutStepIncrement,
} = cartSlice.actions;

export default cartSlice.reducer;
