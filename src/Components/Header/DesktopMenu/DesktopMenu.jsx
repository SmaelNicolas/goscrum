import React from "react";
import { BiUserCheck } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";
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
			<div className='header--desktop--info'>
				<BiUserCheck className='header--desktop--icon' /> {user}
			</div>
			<div className='header--desktop--info'>
				<BsListTask className='header--desktop--icon' />
				Tareas creadas: {tasks?.length ?? 0}
			</div>
			<button className='header--button--logout' onClick={handleLogOut}>
				Cerrar Sesion
			</button>
		</header>
	);
};
