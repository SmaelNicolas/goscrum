const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

export const GET_TASKS = (path, dispatch, tasksSuccess, tasksFailure) => {
	fetch(`${API_ENDPOINT}task/${path}`, {
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + localStorage.getItem("token"),
		},
	})
		.then((response) => response.json())
		.then((data) => {
			dispatch(tasksSuccess(data.result));
		})
		.catch((error) => dispatch(tasksFailure(error)));
};
