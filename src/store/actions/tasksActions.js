import { TASK_REQUEST, TASK_SUCCESS, TASK_FAILURE } from "../types";
const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

export const tasksRequest = () => ({
	type: TASK_REQUEST,
	payload: "",
});
export const tasksSuccess = (data) => ({
	type: TASK_SUCCESS,
	payload: data,
});
export const tasksFailure = (error) => ({
	type: TASK_FAILURE,
	payload: error,
});

export const getTasks = (path) => (dispatch) => {
	dispatch(tasksRequest());
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

export const deleteTask = (id) => (dispatch) => {
	dispatch(tasksRequest());
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
export const editTaskStatus = (data) => (dispatch) => {
	const statusARRAY = ["NEW", "IN PROGRESS", "FINISHED"];
	const newStatusIndex = statusARRAY.indexOf(data.status);
	const newStatus =
		newStatusIndex > 1 ? statusARRAY[0] : statusARRAY[newStatusIndex + 1];

	dispatch(tasksRequest());
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