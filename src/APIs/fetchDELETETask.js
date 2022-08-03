const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

export const DELETE_TASK = (id, dispatch, getTasks, tasksFailure) => {
	fetch(`${API_ENDPOINT}task/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + localStorage.getItem("token"),
		},
	})
		.then((response) => response.json())
		.then(() => dispatch(getTasks("")))
		.catch((error) => dispatch(tasksFailure(error)));
};
