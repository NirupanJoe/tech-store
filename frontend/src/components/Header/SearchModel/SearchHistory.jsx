import KeywordList from './KeywordList';

const SearchHistory = ({ searchHistory, handleSearch, clearHistory }) =>
	searchHistory.length > 0
		&& <div className="mt-4">
			<div className="flex justify-between items-center mb-2">
				<h3 className="font-semibold">Search History</h3>
				<button onClick={ clearHistory } className="text-sm text-blue-600">
					Clear All
				</button>
			</div>
			<KeywordList keywords={ searchHistory } handleSearch={ handleSearch }/>
		</div>;

export default SearchHistory;
