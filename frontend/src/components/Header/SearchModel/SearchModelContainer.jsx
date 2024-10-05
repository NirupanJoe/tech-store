import { Fragment } from 'react';
import useSearchModalLogic from './useSearchModelLogic';
import SearchInput from './searchInput';
import KeywordList from './KeywordList';
import SearchHistory from './SearchHistory';

const SearchModelContainer = ({ onClose }) => {
	const searchProps = useSearchModalLogic(onClose);

	return <Fragment>
		<SearchInput { ...{ ...searchProps, onClose } }/>
		<KeywordList { ...{ ...searchProps, title: 'Popular Keywords' } }/>
		<SearchHistory { ...searchProps }/>
	</Fragment>;
};

export default SearchModelContainer;
