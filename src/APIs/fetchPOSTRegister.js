import { v4 as uuidv4 } from "uuid";
import { swalAccountCreated } from "../utils/swal";
const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

export const POST_Register = (values, navigate) => {
	const teamID = values.teamID ? values.teamID : uuidv4();

	fetch(`${API_ENDPOINT}auth/register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			user: {
				userName: values.userName,
				password: values.password,
				email: values.email,
				teamID,
				role: values.role,
				continent: values.continent,
				region: values.region,
			},
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			swalAccountCreated(
				data?.result?.user?.teamID,
				values.userName,
				navigate
			);
		});
};
