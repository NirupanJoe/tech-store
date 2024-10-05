import { createSlice } from '@reduxjs/toolkit';
import config from '../actions/config';

const saveToLocalStorage = (key, value) => {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	}
	catch (error) {
		console.error('Error saving to local storage', error);
	}
};

const loadFromLocalStorage = (key) => {
	try {
		const data = localStorage.getItem(key);

		return data ? JSON.parse(data) : [];
	}
	catch (error) {
		console.error('Error loading from local storage', error);
		return [];
	}
};

const searchSlice = createSlice({
	name: 'search',
	initialState: { searchHistory: loadFromLocalStorage('searchHistory') },
	reducers: {
		addSearchHistory (state, action) {
			const newHistory = [action.payload, ...state.searchHistory];

			state.searchHistory = Array.from(new Set(newHistory)).slice(0, config.maxSearchHistory);

			saveToLocalStorage('searchHistory', state.searchHistory);
		},
		clearHistory (state) {
			state.searchHistory = [];

			saveToLocalStorage('searchHistory', []);
		},
	},
});

export const { addSearchHistory, clearHistory } = searchSlice.actions;

export default searchSlice.reducer;
