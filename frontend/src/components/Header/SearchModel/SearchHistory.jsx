import { useDispatch, useSelector } from 'react-redux';
import KeywordList from './KeywordList';
import { clearSearchHistory } from '../../../actions/searchActions';
import { Fragment } from 'react';

const SearchHistory = ({ ...props }) => {
	const { searchHistory } = useSelector((state) => state.searchState);
	const dispatch = useDispatch();

	const handleClearHistory = () => {
		dispatch(clearSearchHistory());
	};

	return searchHistory.length > 0
			&& <Fragment>
				<div className="flex justify-between items-center mb-2 mt-3">
					<h3 className="font-semibold">Search History</h3>
					<button onClick={ handleClearHistory } className="text-sm text-blue-600">
						Clear All
					</button>
				</div>
				<KeywordList keywords={ searchHistory } { ...props }/>
			</Fragment>;
};

export default SearchHistory;
