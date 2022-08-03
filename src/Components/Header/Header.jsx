import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import "./header.css";
import { useResize } from "../../Hooks/useResize";

export const Header = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState(localStorage.getItem("user"));

	const { isMobile } = useResize();

	const handleLogOut = () => {
		localStorage.removeItem("logged");
		localStorage.removeItem("user");
		navigate("/login", { replace: true });
	};

	const { tasks } = useSelector((state) => {
		return state.taskReducer;
	});

	return isMobile ? (
		<header className='header'>
			<span>Go Scrum</span>
			<button onClick={() => navigate("/donate", { replace: true })}>
				Donar
			</button>
			<div>
				<div>{user}</div>
				<button onClick={handleLogOut}>Cerrar Sesion</button>

				<div>
					Tareas creadas: {tasks?.length} <span></span>
				</div>
			</div>
		</header>
	) : (
		<header className='header'>
			<span>Go Scrum</span>
			<button onClick={() => navigate("/donate", { replace: true })}>
				Donar
			</button>
			<div>
				<div>{user}</div>
				<button onClick={handleLogOut}>Cerrar Sesion</button>
				<div>
					Tareas creadas: {tasks?.length} <span></span>
				</div>
			</div>
		</header>
	);
};
