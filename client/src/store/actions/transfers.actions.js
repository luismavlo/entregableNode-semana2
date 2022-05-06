import axios from 'axios';
import Swal from 'sweetalert2'

import { transfersActions } from '../slices/transfers.slice';


export const getUsersTransfers = userId => {
	return async (dispatch) => {
		try {
			axios.get(`http://localhost:4000/api/v1/users/${userId}/history`)
				.then(res => {
					console.log(res.data)
					dispatch(transfersActions.getTransfers(res.data.transfer));
				}).catch(err => console.log(err))
		} catch (error) {
			console.log(error);
		}
	};
};

export const newTransfer = (accountNumber, amount) => {
	return async dispatch => {
		const senderUserId = localStorage.getItem("uid")
		try {
			axios.post("http://localhost:4000/api/v1/transfer", {
				amount,
				accountNumber,
				senderUserId
			}).then(res => {
				console.log(res.data)
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'transaction successful',
					showConfirmButton: false,
					timer: 1500
				})

				dispatch(transfersActions.newTransfer())

			}).catch(err => console.log(err))

		} catch (error) {
			console.log(error);
		}
	};
};
