import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productsActions';

const useFetchProducts = (productsParams = {}) => {
	const dispatch = useDispatch();
	const productsState = useSelector((state) => state.productsState);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		dispatch(getProducts({ currentPage, ...productsParams }));
	}, [dispatch, currentPage, JSON.stringify(productsParams)]);

	return { ...productsState, currentPage, setCurrentPage };
};

export default useFetchProducts;
