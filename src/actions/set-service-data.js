import { ACTION_TYPE } from './action-type';

export const setServiceData = (serviceData) => ({
	type: ACTION_TYPE.SET_SERVICE_DATA,
	payload: serviceData,
});
