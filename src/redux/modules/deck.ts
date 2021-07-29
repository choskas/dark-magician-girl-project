import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const DECK = 'yugi/auth/AUTHENTICATED_USER';

const INITIAL_STATE = {
	myDeck: [],
};

export default function deck(state = INITIAL_STATE, action: AnyAction) {
	switch (action.type) {
		case DECK:
			return { ...state, myDeck: action.payload };
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

export const getAllUserDecks = (email: any) => async (dispatch: Dispatch<any>) => {
	try {
		const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/deck/getAllUserDecks`, {email})
	
	} catch (error) {
		console.log(error)
	}
}

export const createDeck = (data: any) => async (dispatch: Dispatch<any>) => {
	try {
		const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/deck/create`, data)
		toast(response.data.message)
	} catch (error) {
		console.log(error);
	}
}

