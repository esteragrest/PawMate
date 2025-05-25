import { request } from '../utils';
import { setServiceData } from './set-service-data';

export const loadServiceAsync = (serviceId) => (dispatch) =>
	request(`/api/services/${serviceId}`).then((service) => {
		if (service.error) {
			return service.error;
		}

		dispatch(
			setServiceData({
				...service,
				serviceOwnerFirstName: service.profile.firstName,
				serviceOwnerLastName: service.profile.lastName,
				serviceOwnerPhoto: service.profile.photo,
			}),
		);
	});
