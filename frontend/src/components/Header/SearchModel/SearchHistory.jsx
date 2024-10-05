import { useDispatch, useSelector } from 'react-redux';
import KeywordList from './KeywordList';
import { clearSearchHistory } from '../../../actions/searchActions';

const SearchHistory = ({ ...props }) => {
	const { searchHistory } = useSelector((state) => state.searchState);
	const dispatch = useDispatch();

	const handleClearHistory = () => {
		dispatch(clearSearchHistory());
	};

	return searchHistory.length > 0
			&& <div className="mt-4">
				<div className="border-t border-gray-300 mt-4"/>
				<div className="flex justify-between items-center mb-2">
					<h3 className="font-semibold">Search History</h3>
					<button onClick={ handleClearHistory } className="text-sm text-blue-600">
						Clear All
					</button>
				</div>
				<KeywordList keywords={ searchHistory } { ...props }/>
			</div>;
};

export default SearchHistory;
