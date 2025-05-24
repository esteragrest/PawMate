export const request = async (url, method, data) => {
	const isFormData = data instanceof FormData;

	const baseHeaders = isFormData ? {} : { 'Content-Type': 'application/json' };

	const token = sessionStorage.getItem('token');

	const headers = token
		? { ...baseHeaders, Authorization: `Bearer ${token}` }
		: baseHeaders;

	console.log(data);
	console.log(headers);
	return await fetch(url, {
		headers,
		method: method || 'GET',
		body: isFormData ? data : JSON.stringify(data),
	}).then((res) => res.json());
};
