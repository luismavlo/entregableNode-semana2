import axios from 'axios';

import { usersActions } from '../slices/user.slice';



export const login = (accountNumber, password) => {
	return async dispatch => {
		try {
			axios.post("http://localhost:4000/api/v1/users/login", { accountNumber, password })
				.then(res => {
					localStorage.setItem('uid', res.data.uid)
					dispatch(usersActions.login(res.data.uid))
				}).catch(err => console.log(err))

		} catch (error) {
			console.log(error);
		}
	};
};

export const signup = (name, password) => {
	return async dispatch => {
		try {
			axios.post("http://localhost:4000/api/v1/users/signup", { name, password })
				.then(res => {
					localStorage.setItem('uid', res.data.uid)
					dispatch(usersActions.login(res.data.uid));
				}).catch(err => console.log(err))
		} catch (error) {
			console.log(error);
		}
	};
};

export const logout = () => {
	return async dispatch => {
		try {
			localStorage.clear()
			dispatch(usersActions.logout());
		} catch (error) {
			console.log(error);
		}
	};
};
