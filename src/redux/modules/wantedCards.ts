import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const WANTED_CARDS = 'yugi/wantedCards/WANTED_CARDS';

const INITIAL_STATE = {
	wantedCards: [],
};

export default function wantedCards(state = INITIAL_STATE, action: AnyAction) {
	switch (action.type) {
		case WANTED_CARDS:
			return { ...state, wantedCards: action.payload };
		default:
			return state;
	}
}

export const addToMyWantedCards = (card: any) => async (dispatch: Dispatch<any>) => {
	try {
		const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wantedCards/add`, card)
        toast(response.data.message)
        return response.data;
	} catch (error) {
		console.log(error)
	}
};
