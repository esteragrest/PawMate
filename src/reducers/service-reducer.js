import { ACTION_TYPE } from '../actions';

const initialServiceState = {
	id: '',
	title: '',
	description: '',
	photo: '',
	serviceOwnerFirstName: '',
	//добавить id владельца
	serviceOwnerLastName: '',
	serviceOwnerPhoto: '',
	address: '',
	price: '',
	userEmail: '',
};

export const serviceReducer = (state = initialServiceState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_SERVICE_DATA: {
			return {
				...state,
				...action.payload,
			};
		}
		case ACTION_TYPE.RESET_SERVICE_DATA: {
			return initialServiceState;
		}
		default:
			return state;
	}
};
