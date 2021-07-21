import { toast } from 'react-toastify';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';

const AUTHENTICATED = 'yugi/auth/AUTHENTICATED_USER';;

const INITIAL_STATE = {
	authenticated: false,
	userData: {
		userName: typeof window !== "undefined" ? window.sessionStorage.name : '',
		email: typeof window !== "undefined" ? window.sessionStorage.email : '',
		picture: typeof window !== "undefined" ? window.sessionStorage.picture : '',
	},
};

export default function auth(state = INITIAL_STATE, action: AnyAction) {
	switch (action.type) {
		case AUTHENTICATED:
			return { ...state, authenticated: true, userData: action.payload };
		default:
			return state;
	}
}

export const logInAction = (data: any) => async (dispatch: Dispatch<any>) => {
	try {
		const response: any = await axios.post('https://yugicardsbackend.herokuapp.com/signup', data)
		dispatch({
			type: AUTHENTICATED,
			payload: {
				picture: response.user.picture.data.url,
				userName: response.user.name,
				email: response.user.email,
			},
		});
        if (typeof window !== 'undefined') {
            window.sessionStorage.setItem('userName', data.name);
            window.sessionStorage.setItem('email', data.email);
            window.sessionStorage.setItem('picure', data.picture.data.url);
        }
	} catch (error) {
		console.log(error)
	}
};
