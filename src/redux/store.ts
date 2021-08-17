import { configureStore } from '@reduxjs/toolkit';
import deck from './modules/deck';
import wantedCards from './modules/wantedCards';
import storeCards from './modules/storeCards';
import wantedBases from './modules/wantedBases';

const store = configureStore({
	reducer: {
		deck,
		wantedCards,
		storeCards,
		wantedBases,
	},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;
