import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const maxSearchHistory = 4;

const useSearchModalLogic = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchHistory, setSearchHistory] = useState(['']);
	const navigation = useNavigate();

	const handleSearch = (term) => {
		if(term.trim()) {
			navigation(`/search/${ term }`);
			setSearchHistory((prevHistory) => [term, ...prevHistory.slice(0, maxSearchHistory)]);
			setSearchTerm('');
		}
	};

	const clearHistory = () => setSearchHistory([]);

	return {
		searchTerm,
		setSearchTerm,
		searchHistory,
		clearHistory,
		handleSearch,
	};
};

export default useSearchModalLogic;
