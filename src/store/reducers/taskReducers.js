import {
	TASK_REQUEST,
	TASK_SUCCESS,
	TASK_FAILURE,
	TASK_POSTED,
	LOGOUT,
} from "../types";

const initialState = {
	loading: false,
	tasks: [],
	error: "",
};

export const taskReducer = (state = initialState, action) => {
	switch (action.type) {
		case TASK_REQUEST:
			return {
				...state,
				loading: true,
			};
		case TASK_SUCCESS: {
			return {
				loading: false,
				error: "",
				tasks: action.payload,
			};
		}
		case TASK_FAILURE:
			return {
				loading: false,
				error: action.payload,
				tasks: [],
			};
		case TASK_POSTED:
			return {
				loading: true,
				error: "",
				tasks: [],
			};
		case LOGOUT:
			return {
				loading: false,
				error: "",
				task: [],
			};
		default:
			return state;
	}
};
