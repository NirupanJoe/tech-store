import { createSlice } from '@reduxjs/toolkit';
import config from '../actions/config';

const searchSlice = createSlice({
	name: 'search',
	initialState: { searchHistory: [] },
	reducers: {
		addSearchHistory (state, action) {
			const newHistory = [action.payload, ...state.searchHistory];

			state.searchHistory = Array.from(new Set(newHistory)).slice(0, config.maxSearchHistory);
		},
		clearHistory () {
			return { searchHistory: [] };
		},
	},
});

export const { addSearchHistory, clearHistory } = searchSlice.actions;

export default searchSlice.reducer;
