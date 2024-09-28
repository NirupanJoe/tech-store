
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../actions/productActions';
import Loader from '../../Loader';
import Error from '../Error';
import ProductDetailContent from './ProductDetailContent';

const ProductDetails = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const { product, loading, error } = useSelector(({ productState }) => productState);

	useEffect(() => {
		dispatch(getProduct(id));
	}, [dispatch, id]);

	return (
		<div className="container mx-auto p-4">
			{ loading
				? <Loader/>
				: error
					? <Error error={ error }/>
					: product && <ProductDetailContent { ...{ product } }/> }
		</div>
	);
};

export default ProductDetails;
