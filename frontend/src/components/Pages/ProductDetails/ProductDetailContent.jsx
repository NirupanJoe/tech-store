import { useState } from 'react';
import ProductOptions from './ProductOptions';
import ProductPriceStock from './ProductPriceStock';
import Rating from '../../Rating';
import InBoxItems from './InBoxItems';
import Carousel from '../../Carousel';
import MetaData from '@MetaData';

const ProductImageGallery = ({ productImage }) =>
	<div className="md:w-1/2">
		<Carousel images={ productImage }/>
	</div>;

const ProductInfoSection = ({ ...props }) =>
	<div className="md:w-1/2">
		<ProductTitle { ...props }/>
		<ProductRating { ...props }/>
		<ProductOptionsSection { ...props }/>
		<ProductPricingSection { ...props }/>
		<InBoxItems/>
	</div>;

const ProductOptionsSection = ({
	variants,
	selectedColor, setSelectedColor,
	selectedStorage, setSelectedStorage,
	selectedMemory, setSelectedMemory,
}) =>
	<ProductOptions
		variants={ variants }
		selectedColor={ selectedColor }
		setSelectedColor={ setSelectedColor }
		selectedStorage={ selectedStorage }
		setSelectedStorage={ setSelectedStorage }
		selectedMemory={ selectedMemory }
		setSelectedMemory={ setSelectedMemory }
	/>;

const ProductPricingSection = ({
	product, selectedVariant,
	selectedColor, selectedStorage, selectedMemory,
}) =>
	<ProductPriceStock
		product={ product }
		selectedVariant={ selectedVariant }
		selectedColor={ selectedColor }
		selectedStorage={ selectedStorage }
		selectedMemory={ selectedMemory }
	/>;

const ProductTitle = ({ product, selectedMemory }) =>
	<h1 className="text-2xl font-bold mb-2">
		{ product.name } ({ selectedMemory } Memory)
	</h1>;

const ProductRating = ({ product }) =>
	<div className="flex items-center mb-4">
		<Rating value={ product.rating } readOnly={ true }/>
		<span className="ml-2 text-sm text-gray-500">
			({ product.reviewsCount })
		</span>
	</div>;

const useProductSelection = (variants) => {
	const [selectedColor, setSelectedColor] = useState(variants[0].colorName || '');
	const [selectedStorage, setSelectedStorage] = useState(variants[0].storage || '');
	const [selectedMemory, setSelectedMemory] = useState(variants[0].ram || '');

	const selectedVariant = variants.find((variant) =>
		variant.colorName === selectedColor
			&& variant.storage === selectedStorage
			&& variant.ram === selectedMemory);

	const productImage = selectedVariant.imageUrls;

	return {
		selectedColor,
		setSelectedColor,
		selectedStorage,
		setSelectedStorage,
		selectedMemory,
		setSelectedMemory,
		selectedVariant,
		productImage,
	};
};

const ProductDetailContent = ({ product }) => {
	const { variants = [] } = product;

	const productSelection = useProductSelection(variants);

	return (
		<div className="flex flex-col md:flex-row gap-8">
			<MetaData title={ `${ product.name } | product` }/>
			<ProductImageGallery { ...productSelection }/>
			<ProductInfoSection
				product={ product }
				variants={ variants }
				{ ...productSelection }
			/>
		</div>
	);
};

export default ProductDetailContent;
