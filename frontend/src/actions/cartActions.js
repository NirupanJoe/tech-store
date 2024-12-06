import { addCartItemFail, addCartItemRequest, addCartItemSuccess } from '../slice/cartSlice';

export const addCartItem = ({ product, selectedVariant }) => (dispatch) => {
	try {
		dispatch(addCartItemRequest());
		const data = {
			productId: product._id,
			variantId: selectedVariant._id,
			name: product.name,
			price: selectedVariant.discountedPrice,
			image: selectedVariant.imageUrls[0],
		};

		dispatch(addCartItemSuccess(data));
	}
	catch (err) {
		dispatch(addCartItemFail(err.response.data.message));
	}
};
