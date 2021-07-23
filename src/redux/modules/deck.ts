import { AnyAction, Dispatch } from '@reduxjs/toolkit';

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

