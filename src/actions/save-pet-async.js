import { request } from '../utils';

export const savePetAsync = (petData, url, method) => (dispatch) => {
	const petFormData = Object.keys(petData).reduce((petFormData, key) => {
		const value = petData[key];
		petFormData.append(key, value);

		return petFormData;
	}, new FormData());

	return request(url, method, petFormData).then((res) => {
		if (res.error) {
			console.log(res.error);
			return;
		}

		return res;
	});
};
