import { configureStore } from '@reduxjs/toolkit';
import deck from './modules/deck';
import wantedCards from './modules/wantedCards';

const store = configureStore({
	reducer: {
		deck,
		wantedCards
	},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;
