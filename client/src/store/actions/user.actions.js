import axios from 'axios';

import { usersActions } from '../slices/user.slice';



export const login = (accountNumber, password) => {
	return async dispatch => {
		try {
			axios.post("http://localhost:4000/api/v1/users/login", { accountNumber, password })
				.then(res => {
					localStorage.setItem('uid', res.data.uid)
					localStorage.setItem('amount', res.data.amount)
					console.log(res.data.amount)
					dispatch(usersActions.login({ uid: res.data.uid, amount: res.data.amount }))
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
