import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

export const Header = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState(localStorage.getItem("user"));

	const handleLogOut = () => {
		localStorage.removeItem("logged");
		localStorage.removeItem("user");
		navigate("/login", { replace: true });
	};

	const { tasks } = useSelector((state) => {
		return state.taskReducer;
	});

	return (
		<header>
			<span>Go Scrum</span>
			<div>
				<div>{user}</div>
				<div onClick={handleLogOut}>X</div>
				<div>
					Tareas creadas: {tasks?.length} <span></span>
				</div>
			</div>
		</header>
	);
};
