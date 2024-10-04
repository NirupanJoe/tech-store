import { addSearchHistory, clearHistory } from '../slice/searchSlice';

export const setSearchHistory = (term) => (dispatch) => {
	dispatch(addSearchHistory(term));
};

export const clearSearchHistory = () => (dispatch) => {
	dispatch(clearHistory());
};
