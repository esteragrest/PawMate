import { request } from '../utils';
import { setServiceData } from './set-service-data';

export const saveServiceAsync = (serviceData, url, method) => (dispatch) => {
	const serviceFormData = Object.keys(serviceData).reduce((serviceFormData, key) => {
		const value = serviceData[key];
		serviceFormData.append(key, value);

		return serviceFormData;
	}, new FormData());

	return request(url, method, serviceFormData).then((res) => {
		if (res.error) {
			console.log(res.error);
			return;
		}

		dispatch(setServiceData(res));

		return res.id;
	});
};
