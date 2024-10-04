import { Fragment } from 'react';
import useSearchModalLogic from './useSearchModelLogic';
import SearchInput from './searchInput';
import KeywordList from './KeywordList';
import SearchHistory from './SearchHistory';

const SearchModelContainer = ({ onClose }) => {
	const searchProps = useSearchModalLogic();

	return <Fragment>
		<SearchInput { ...{ ...searchProps, onClose } }/>
		<KeywordList { ...{ ...searchProps, title: 'Popular Keywords' } }/>
		<div className="border-t border-gray-300 mt-4"/>
		<SearchHistory { ...{ ...searchProps } }/>
	</Fragment>;
};

export default SearchModelContainer;
