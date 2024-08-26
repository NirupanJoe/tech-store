import { useState } from 'react';

const maxSearchHistory = 4;

const useSearchModalLogic = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchHistory, setSearchHistory] = useState(['Galaxy Z Fold6']);

	const handleSearch = (term) => {
		if(term.trim())
			setSearchHistory((prevHistory) => [term, ...prevHistory.slice(0, maxSearchHistory)]);
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
