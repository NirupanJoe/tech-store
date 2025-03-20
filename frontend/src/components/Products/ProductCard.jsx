import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import helper from '../../services/helper';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Title = ({ title }) =>
	<h3 className="text-lg font-semibold h-5">{ title }</h3>;

const Image = ({ src, product: { _id: id, name: alt }}) =>
	<div className="flex justify-center">
		<Link to={ `/product/${ id }` }>
			<LazyLoadImage
				className="mt-2 sm:w-96 md:w-80 ld:w-96 h-64 object-contain"
				alt={ alt }
				effect="blur"
				wrapperProps={ { style: { transitionDelay: '0.5s' }} }
				src={ src }
			/>
		</Link>
	</div>;

const Color = ({ color }) =>
	<p>
		<span className="font-semibold">Colour: </span>
		<span className="font-normal">{ color }</span>
	</p>;

const ColorIndicator = ({ color }) =>
	<div className="h-6 flex justify-center">
		<div className="border-2 border-gray-600 flex items-center
    justify-center h-full rounded-full w-6"
		>
			<div
				className="w-5 h-5 rounded-full border-2 border-gray-600"
				style={ { backgroundColor: color } }
			/>
		</div>
	</div>;

const Storage = ({ storage }) =>
	<div className="mt-2 flex justify-center">
		<p className="w-16 rounded-full border border-gray-600 p-1">{ storage }</p>
	</div>;

const Pricing = ({ price, discountedPrice, discount }) =>
	<Fragment>
		<p className="text-sm mt-2 font-semibold">
			{ helper.formatPrice(discountedPrice) }
		</p>
		<p className="text-gray-400 line-through text-sm">{ price }</p>
		<p className="text-primary-500 text-sm mt-1">Save { discount }</p>
	</Fragment>;

const BuyButton = ({ _id: id }) =>
	<Link to={ `/product/${ id }` }>
		<button className="bg-black text-white mt-4 py-2 px-4 rounded-full hover:bg-gray-500 w-1/2">
			Buy now
		</button>
	</Link>;

const ProductCard = ({ product }) => {
	const variant = product.variants[0];

	return <div className="rounded-lg p-2 sm:p-4 text-center">
		<Title title={ product.name }/>
		<Image src={ variant.imageUrls[0] } product={ product }/>
		<Color color={ variant.colorName }/>
		<ColorIndicator color={ variant.color }/>
		<Storage storage={ variant.storage }/>
		<Pricing
			price={ variant.price }
			discountedPrice={ variant.discountedPrice }
			discount={ variant.discount }
		/>
		<BuyButton { ...product }/>
	</div>;
};

export default ProductCard;
