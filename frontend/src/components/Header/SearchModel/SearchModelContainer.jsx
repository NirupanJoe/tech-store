import { Fragment } from 'react';
import useSearchModalLogic from './useSearchModelLogic';
import SearchInput from './searchInput';
import KeywordList from './KeywordList';
import SearchHistory from './SearchHistory';

const SearchModelContainer = ({ onClose }) => {
	const {
		searchTerm, setSearchTerm,
		searchHistory, clearHistory, handleSearch,
	} = useSearchModalLogic();

	return <Fragment>
		<SearchInput
			{ ...{ searchTerm, setSearchTerm, handleSearch, onClose } }
		/>
		<KeywordList
			{ ...{ handleSearch: handleSearch, title: 'Popular Keywords' } }
		/>
		<div className="border-t border-gray-300 mt-4"/>
		<SearchHistory
			{ ...{ searchHistory, handleSearch, clearHistory } }
		/>
	</Fragment>;
};

export default SearchModelContainer;
