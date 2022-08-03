import { toast } from "react-toastify";

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

export const POST_TASK = (values, resetForm) => {
	fetch(`${API_ENDPOINT}task`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + localStorage.getItem("token"),
		},
		body: JSON.stringify({
			task: values,
		}),
	})
		.then((response) => response.json())
		.then(() => {
			resetForm();
			toast("Tu tarea se creo");
		});
};
