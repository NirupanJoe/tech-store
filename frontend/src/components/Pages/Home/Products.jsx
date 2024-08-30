import { Fragment } from 'react';

const products = [
	{
		title: 'Nebula Fold Pro',
		color: 'Silver Shadow',
		storage: '256 GB',
		image: 'https://via.placeholder.com/150x200',
		price: '₹152519.00',
		discountedPrice: '₹164999.00',
		discount: '₹12480.00',
		monthlyPayment: '₹7395.13',
	},
	{
		title: 'Nebula Flip Pro',
		color: 'Blue',
		storage: '256 GB',
		image: 'https://via.placeholder.com/150x200',
		price: '₹101369.00',
		discountedPrice: '₹109999.00',
		discount: '₹8630.00',
		monthlyPayment: '₹4915.04',
	},
	{
		title: 'Nebula Tab Ultra (Wi-Fi, 8GB RAM)',
		color: 'Lavender',
		storage: '256 GB',
		image: 'https://via.placeholder.com/150x200',
		price: '₹43199.00',
		discountedPrice: '₹51999.00',
		discount: '₹8800.00',
		monthlyPayment: '₹2094.57',
	},
	{
		title: 'Nebula Tab Pro (Wi-Fi, 12GB RAM)',
		color: 'Graphite',
		storage: '512 GB',
		image: 'https://via.placeholder.com/150x200',
		price: '₹84999.00',
		discountedPrice: '₹94999.00',
		discount: '₹10000.00',
		monthlyPayment: '₹4250.00',
	},
	{
		title: 'Nebula Fold Lite',
		color: 'Green',
		storage: '128 GB',
		image: 'https://via.placeholder.com/150x200',
		price: '₹102499.00',
		discountedPrice: '₹119999.00',
		discount: '₹17500.00',
		monthlyPayment: '₹5124.00',
	},
	{
		title: 'Nebula Fold Lite',
		color: 'Blue',
		storage: '256 GB',
		image: 'https://via.placeholder.com/150x200',
		price: '₹102499.00',
		discountedPrice: '₹119999.00',
		discount: '₹17500.00',
		monthlyPayment: '₹5124.00',
	},
	{
		title: 'Nebula Flip Lite',
		color: 'Pink',
		storage: '128 GB',
		image: 'https://via.placeholder.com/150x200',
		price: '₹74999.00',
		discountedPrice: '₹84999.00',
		discount: '₹10000.00',
		monthlyPayment: '₹3750.00',
	},
	{
		title: 'Nebula Tab FE (4G, 6GB RAM)',
		color: 'Pink',
		storage: '128 GB',
		image: 'https://via.placeholder.com/150x200',
		price: '₹29999.00',
		discountedPrice: '₹35999.00',
		discount: '₹6000.00',
		monthlyPayment: '₹150x2000.00',
	},
];

const Title = ({ title }) =>
	<h3 className="text-lg font-semibold mt-4 h-16">{ title }</h3>;

const Image = ({ src, alt }) =>
	<div className="flex justify-center">
		<img src={ src } alt={ alt } className="w-40 h-60 object-contain"/>
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

const Pricing = ({ monthlyPayment, price, discountedPrice, discount }) =>
	<Fragment>
		<p className="text-sm mt-2 font-semibold">
			From { monthlyPayment } /mo for 24 mos at 15% Interest or { price }
		</p>
		<p className="text-gray-400 line-through text-sm">{ discountedPrice }</p>
		<p className="text-blue-500 text-sm mt-1">Save { discount }</p>
	</Fragment>;

const BuyButton = () =>
	<button className="bg-black text-white mt-4 py-2 px-4 rounded-full hover:bg-gray-500 w-1/2">
		Buy now
	</button>;

const ProductCard = ({ product }) =>
	<div className="rounded-lg p-4 text-center">
		<Title title={ product.title }/>
		<Image src={ product.image } alt={ product.title }/>
		<Color color={ product.color }/>
		<ColorIndicator color={ product.color }/>
		<Storage storage={ product.storage }/>
		<Pricing
			monthlyPayment={ product.monthlyPayment }
			price={ product.price }
			discountedPrice={ product.discountedPrice }
			discount={ product.discount }
		/>
		<BuyButton/>
	</div>;

const Products = () =>
	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
		{ products.map((product, index) =>
			<ProductCard key={ index } product={ product }/>) }
	</div>;

export default Products;
