import { configureStore } from '@reduxjs/toolkit';
import deck from './modules/deck';

const store = configureStore({
	reducer: {
		deck,
	},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;
