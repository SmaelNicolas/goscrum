const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

export const UPDATE_TASK = (data, dispatch, getTasks, tasksFailure) => {
	const statusARRAY = ["NEW", "IN PROGRESS", "FINISHED"];
	const newStatusIndex = statusARRAY.indexOf(data.status);
	const newStatus =
		newStatusIndex > 1 ? statusARRAY[0] : statusARRAY[newStatusIndex + 1];

	fetch(`${API_ENDPOINT}task/${data._id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + localStorage.getItem("token"),
		},
		body: JSON.stringify({
			task: {
				title: data.title,
				importance: data.importance,
				status: newStatus,
				description: data.description,
			},
		}),
	})
		.then((response) => response.json())
		.then(() => dispatch(getTasks("")))
		.catch((error) => dispatch(tasksFailure(error)));
};
