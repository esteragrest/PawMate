import { request } from '../utils';

export const updateUserAsync = (updatedUserData, id) => (dispatch) => {
	const userFormData = Object.keys(updatedUserData).reduce((formData, key) => {
		const value = updatedUserData[key];

		if (value !== null && value !== '') {
			formData.append(key, value);
		}

		return formData;
	}, new FormData());

	return request(`/api/profiles/${id}`, 'PUT', userFormData)
		.then(({ message }) => {
			if (message) {
				const storedUserData = sessionStorage.getItem('userData');
				const userData = JSON.parse(storedUserData);
				const token = userData.token;
				sessionStorage.setItem(
					'userData',
					JSON.stringify({ ...userData, token }),
				);
			}
		})
		.catch((error) => {
			console.log(error);
		});
};
