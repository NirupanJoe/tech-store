import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setSearchHistory } from '../../../actions/searchActions';
import { useDispatch } from 'react-redux';

const useSearchModalLogic = (onClose) => {
	const [searchTerm, setSearchTerm] = useState('');
	const dispatch = useDispatch();
	const navigation = useNavigate();

	const handleSearch = (term) => {
		if(term.trim()) {
			navigation(`/search/${ term }`);
			dispatch(setSearchHistory(term));
			onClose();
		}
	};

	return {
		searchTerm,
		setSearchTerm,
		handleSearch,
	};
};

export default useSearchModalLogic;
