import { toast } from 'react-toastify';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';

const AUTHENTICATED = 'yugi/auth/AUTHENTICATED_USER';
const USER_DATA = 'yugi/auth/AUTHENTICATED_USER';

const INITIAL_STATE = {
	authenticated: typeof window !== "undefined" && sessionStorage.getItem('email') ? true : false,
	userData: {
		userName:typeof window !== "undefined" ? sessionStorage.getItem('userName') : '',
		email: typeof window !== "undefined" ? sessionStorage.getItem('email') : '',
		picture: typeof window !== "undefined" ? sessionStorage.getItem('picture') : '',
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

export const signUpFacebookAction = (data: any) => async (dispatch: Dispatch<any>) => {
	try {
		const response: any = await axios.post('https://yugicardsbackend.herokuapp.com/signupFacebook', data)
		dispatch({
			type: AUTHENTICATED,
			payload: {
				picture: response.data.image,
				userName: response.data.name,
				email: response.data.email,
			},
		});
            sessionStorage.setItem('userName', response.data.name);
            sessionStorage.setItem('email', response.data.email);
            sessionStorage.setItem('picure', response.data.image);
	} catch (error) {
		console.log(error)
		const response: any = await axios.post('https://yugicardsbackend.herokuapp.com/loginFacebook', data)
		dispatch({
			type: AUTHENTICATED,
			payload: {
				picture: response.data.image,
				userName: response.data.name,
				email: response.data.email,
			}
		});
            sessionStorage.setItem('userName', response.data.name);
            sessionStorage.setItem('email', response.data.email);
            sessionStorage.setItem('picure', response.data.image);
	}
};
