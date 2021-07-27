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

export const signUpFacebookAction = () => async (dispatch: Dispatch<any>) => {
	try {
		const response: any = await axios.get('http://localhost:3001/loginFacebook')
		// dispatch({
		// 	type: AUTHENTICATED,
		// 	payload: {
		// 		picture: response.data.image,
		// 		userName: response.data.name,
		// 		email: response.data.email,
		// 	},
		// });
        //     sessionStorage.setItem('userName', response.data.name);
        //     sessionStorage.setItem('email', response.data.email);
        //     sessionStorage.setItem('picure', response.data.image);
		console.log(response)
	} catch (error) {
		console.log(error)
				// dispatch({
		// 	type: AUTHENTICATED,
		// 	payload: {
		// 		picture: response.data.image,
		// 		userName: response.data.name,
		// 		email: response.data.email,
		// 	}
		// });
        //     sessionStorage.setItem('userName', response.data.name);
        //     sessionStorage.setItem('email', response.data.email);
        //     sessionStorage.setItem('picure', response.data.image);
	}
};

export const logOut = () => async (dispatch: Dispatch<any>) => {
	try {
		dispatch({
			type: AUTHENTICATED,
			authenticated: false,
			payload: {
				picture: '',
				userName: '',
				email: '',
			},
		});
            sessionStorage.clear();
	} catch (error) {
		console.log(error)
	}
};
