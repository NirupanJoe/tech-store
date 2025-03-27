import { Fragment } from 'react';
import useSearchModalLogic from './useSearchModelLogic';
import SearchInput from './searchInput';
import PopularKeywords from './PopularKeywords';
import SearchHistory from './SearchHistory';

const SearchModelContainer = ({ onClose }) => {
	const searchProps = useSearchModalLogic(onClose);

	return <Fragment>
		<SearchInput { ...{ ...searchProps, onClose } }/>
		<PopularKeywords { ...searchProps }/>
		<hr className="border-gray-300 mt-2"/>
		<SearchHistory { ...searchProps }/>
	</Fragment>;
};

export default SearchModelContainer;
