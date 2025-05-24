export const request = async (url, method, data) => {
	const isFormData = data instanceof FormData;
	const baseHeaders = isFormData ? {} : { 'Content-Type': 'application/json' };

	let token;
	const storedUserData = sessionStorage.getItem('userData');
	if (storedUserData) {
		try {
			const userData = JSON.parse(storedUserData);
			token = userData.token;
		} catch (e) {
			console.error('Ошибка парсинга userData:', e);
		}
	}

	const headers = token
		? { ...baseHeaders, Authorization: `Bearer ${token}` }
		: baseHeaders;

	return await fetch(url, {
		headers,
		method: method || 'GET',
		body: isFormData ? data : JSON.stringify(data),
	}).then((res) => res.json());
};
