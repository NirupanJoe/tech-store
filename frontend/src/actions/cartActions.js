import { addCartItemFail, addCartItemRequest, addCartItemSuccess } from '../slice/cartSlice';
import { v4 as uuid } from 'uuid';

const createCartItemData = (product, selectedVariant) => ({
	id: uuid(),
	productId: product._id,
	variantId: selectedVariant._id,
	name: product.name,
	price: selectedVariant.discountedPrice,
	image: selectedVariant.imageUrls[0],
	color: selectedVariant.color,
	ram: selectedVariant.ram,
	storage: selectedVariant.storage,
	colorName: selectedVariant.colorName,
	data: { ...product, ...selectedVariant },
	qty: 1,
});

export const addCartItem = ({ product, selectedVariant }) => (dispatch) => {
	try {
		dispatch(addCartItemRequest());
		const data = createCartItemData(product, selectedVariant);

		dispatch(addCartItemSuccess(data));
	}
	catch (err) {
		dispatch(addCartItemFail(err.response.data.message));
	}
};
