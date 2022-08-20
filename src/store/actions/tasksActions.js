import { DELETE_TASK } from "../../APIs/fetchDELETETask";
import { GET_TASKS } from "../../APIs/fetchGETTasks";
import { POST_TASK } from "../../APIs/fetchPOSTTask";
import { UPDATE_TASK } from "../../APIs/fetchUPDATETask";
import { UPDATE_TASK_IMPORTANCE } from "../../APIs/fetchUPDATETaskImportance";
import {
	LOGOUT,
	TASK_FAILURE,
	TASK_POSTED,
	TASK_REQUEST,
	TASK_SUCCESS,
} from "../types";

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
export const taskPosted = () => ({
	type: TASK_POSTED,
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

export const editTaskImportance = (data) => (dispatch) => {
	dispatch(tasksRequest());
	UPDATE_TASK_IMPORTANCE(data, dispatch, getTasks, tasksFailure);
};

export const logout = (data) => (dispatch) => {
	dispatch(tasksLogout());
};

export const postTask = (values, resetForm) => (dispatch) => {
	dispatch(taskPosted());
	POST_TASK(values, resetForm);
};
