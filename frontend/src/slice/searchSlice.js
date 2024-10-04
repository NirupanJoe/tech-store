import { createSlice } from '@reduxjs/toolkit';
import config from '../actions/config';

const searchSlice = createSlice({
	name: 'search',
	initialState: { searchHistory: [] },
	reducers: {
		addSearchHistory (state, action) {
			state.searchHistory = [
				...state.searchHistory.slice(0, config.maxSearchHistory),
				action.payload,
			];
		},
		clearHistory () {
			return { searchHistory: [] };
		},
	},
});

export const { addSearchHistory, clearHistory } = searchSlice.actions;

export default searchSlice.reducer;
