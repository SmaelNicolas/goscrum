import { DELETE_TASK } from "../../APIs/fetchDELETETask";
import { GET_TASKS } from "../../APIs/fetchGETTasks";
import { UPDATE_TASK } from "../../APIs/fetchUPDATETask";
import { TASK_REQUEST, TASK_SUCCESS, TASK_FAILURE, LOGOUT } from "../types";

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
export const tasksLogout = () => ({
	type: LOGOUT,
	payload: "",
});

export const getTasks = (path) => (dispatch) => {
	dispatch(tasksRequest());
	GET_TASKS(path, dispatch, tasksSuccess, tasksFailure);
};

export const deleteTask = (id) => (dispatch) => {
	dispatch(tasksRequest());
	DELETE_TASK(id, dispatch, getTasks, tasksFailure);
};

export const editTaskStatus = (data) => (dispatch) => {
	dispatch(tasksRequest());
	UPDATE_TASK(data, dispatch, getTasks, tasksFailure);
};

export const logout = (data) => (dispatch) => {
	dispatch(tasksLogout());
};
