import { swal } from "../utils/swal";

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

export const POST_Login = (userName, password, navigate) => {
	fetch(`${API_ENDPOINT}auth/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			userName,
			password,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			if (data.status_code === 200) {
				localStorage.setItem("token", data?.result?.token);
				localStorage.setItem("user", data?.result?.user.userName);
				navigate("/", { replace: true });
			} else {
				swal();
			}
		});
};
