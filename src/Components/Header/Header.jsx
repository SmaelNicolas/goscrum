import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState(localStorage.getItem("user"));
	const handleLogOut = () => {
		localStorage.removeItem("logged");
		localStorage.removeItem("user");
		navigate("/login", { replace: true });
	};

	return (
		<header>
			<span>Go Scrum</span>
			<div>
				<div>{user}</div>
				<div onClick={handleLogOut}>X</div>
			</div>
		</header>
	);
};
