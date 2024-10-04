import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setSearchHistory, clearSearchHistory } from '../../../actions/searchActions';
import { useDispatch } from 'react-redux';

const useSearchModalLogic = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const dispatch = useDispatch();
	const navigation = useNavigate();

	const handleSearch = (term) => {
		if(term.trim()) {
			navigation(`/search/${ term }`);
			dispatch(setSearchHistory(term));
		}
	};

	const clearHistory = () => {
		dispatch(clearSearchHistory());
	};

	return {
		searchTerm,
		setSearchTerm,
		clearHistory,
		handleSearch,
	};
};

export default useSearchModalLogic;
