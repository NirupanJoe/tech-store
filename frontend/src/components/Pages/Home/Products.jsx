import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Pagination from 'react-js-pagination';
import config from '../../../actions/config';
import Error from '../Error';

const Title = ({ title }) =>
	<h3 className="text-lg font-semibold mt-4 h-5">{ title }</h3>;

const Image = ({ src, product: { _id: id, name: alt }}) =>
	<div className="flex justify-center">
		<Link to={ `/product/${ id }` }>
			<LazyLoadImage
				className="w-60 h-60 object-contain"
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
			₹ { price }
		</p>
		<p className="text-gray-400 line-through text-sm">{ discountedPrice }</p>
		<p className="text-primary-500 text-sm mt-1">Save { discount }</p>
	</Fragment>;

const BuyButton = ({ _id: id }) =>
	<button className="bg-black text-white mt-4 py-2 px-4 rounded-full hover:bg-gray-500 w-1/2">
		<Link to={ `/product/${ id }` }>
			Buy now
		</Link>
	</button>;

const ProductCard = ({ product }) => {
	const variant = product.variants[0];

	return <div className="rounded-lg p-4 text-center">
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

const ProductGrid = ({ products }) =>
	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
		{ products.map((product) => {
			const { _id: id } = product;

			return <ProductCard key={ id } { ...{ product } }/>;
		}) }
	</div>;

const ProductPagination = ({ currentPage, setCurrentPage, productsCount }) =>
	productsCount > config.productsPerPage
	&& <div className="mt-10 flex justify-center">
		<Pagination
			activePage={ currentPage }
			itemsCountPerPage={ config.productsPerPage }
			totalItemsCount={ productsCount }
			onChange={ (page) => setCurrentPage(page) }
			itemClass="inline-block mx-1"
			linkClass="px-4 py-2 border border-primary-500 rounded-full text-white-600
         hover:bg-primary-600 hover:text-white hover:border-white-500"
			activeLinkClass="bg-primary-600 text-white"
			disabledClass="opacity-50 cursor-not-allowed"
		/>
	</div>;

const Products = (props) => {
	const { products } = props;

	return products.length > 0
		? <section>
			<ProductGrid { ...props }/>
			<ProductPagination { ...props }/>
		</section>
		: <Error error="No Product found"/>;
};

export default Products;
