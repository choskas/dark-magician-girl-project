import { configureStore } from '@reduxjs/toolkit';
import deck from './modules/deck';
import wantedCards from './modules/wantedCards';
import storeCards from './modules/storeCards';

const store = configureStore({
	reducer: {
		deck,
		wantedCards,
		storeCards,
	},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;
