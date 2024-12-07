import { addCartItemFail, addCartItemRequest, addCartItemSuccess } from '../slice/cartSlice';
import { v4 as uuid } from 'uuid';

export const addCartItem = ({ product, selectedVariant }) => (dispatch) => {
	try {
		dispatch(addCartItemRequest());
		const data = {
			id: uuid(),
			productId: product._id,
			variantId: selectedVariant._id,
			name: product.name,
			price: selectedVariant.discountedPrice,
			image: selectedVariant.imageUrls[0],
			color: selectedVariant.colorName,
		};

		dispatch(addCartItemSuccess(data));
	}
	catch (err) {
		dispatch(addCartItemFail(err.response.data.message));
	}
};
