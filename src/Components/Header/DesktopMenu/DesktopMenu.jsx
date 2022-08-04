import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo.png";

export const DesktopMenu = ({ user, tasks, handleLogOut }) => {
	const navigate = useNavigate();

	return (
		<header className='header'>
			<img className='header--logo' src={Logo} alt='goScrum app logo' />
			<button
				className='header--button--donate'
				onClick={() => navigate("/donate", { replace: true })}
			>
				Donar
			</button>
			<div className='header--desktop--user'>✅ {user}</div>
			<div className='header--desktop--countTasks'>
				🔢 Tareas creadas: {tasks?.length} <span></span>
			</div>
			<button className='header--button--logout' onClick={handleLogOut}>
				Cerrar Sesion
			</button>
		</header>
	);
};
