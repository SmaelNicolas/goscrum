const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

export const GET_Data = (setData) => {
	fetch(`${API_ENDPOINT}auth/data`)
		.then((response) => response.json())
		.then((dat) => setData(dat.result));
};
