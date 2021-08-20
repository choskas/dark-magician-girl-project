import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const DECK = 'yugi/auth/AUTHENTICATED_USER';
const ALL_USER_DECKS = 'yugi/auth/ALL_USER_DECKS';

const INITIAL_STATE = {
	myDeck: [],
	allUserDecks: [],
};

export default function deck(state = INITIAL_STATE, action: AnyAction) {
	switch (action.type) {
		case DECK:
			return { ...state, myDeck: action.payload };
		case ALL_USER_DECKS:
			return { ...state, allUserDecks: action.payload };
		default:
			return state;
	}
}

export const addToMyDeck = (data: any) => async (dispatch: Dispatch<any>) => {
	try {
		dispatch({
            type: DECK,
			payload: data.myDeck,
		});
	} catch (error) {
		console.log(error)
	}
};

export const getAllUserDecks = (id: any) => async (dispatch: Dispatch<any>) => {
	try {
		const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/deck/getAllUserDecks`, {id})
		dispatch({
            type: ALL_USER_DECKS,
			payload: response.data.decks,
		});
	} catch (error) {
		console.log(error)
	}
}

export const createDeck = (data: any) => async (dispatch: Dispatch<any>) => {
	try {
		const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/deck/create`, data)
		toast(response.data.message)
	} catch (error) {
		toast.error(error.response.data.message);
		console.log(error);
	}
}

export const createDeckBase = (data: any) => async (dispatch: Dispatch<any>) => {
	try {
		const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/deck/createDeckBase`, data)
		toast(response.data.message)
	} catch (error) {
		
		console.log(error);
	}
}

export const deleteDeck = (data: any) => async (dispatch: Dispatch<any>) => {
	try {
		const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/deck/deleteDeck`, data)
		toast(response.data.message)
	} catch (error) {
		console.log(error);
	}
}

