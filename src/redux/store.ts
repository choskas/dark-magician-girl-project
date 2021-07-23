import { configureStore } from '@reduxjs/toolkit';
import auth from './modules/auth';
import deck from './modules/deck';

const store = configureStore({
	reducer: {
		auth,
		deck,
	},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;
