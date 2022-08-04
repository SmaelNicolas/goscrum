import React, { useState } from "react";
import Logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export const MobileMenu = ({ tasks, user, handleLogOut }) => {
	const [click, setClick] = useState(false);
	const navigate = useNavigate();

	return (
		<header className='header'>
			{!click ? (
				<img
					className='header--logo'
					src={Logo}
					alt='goScrum app logo'
				/>
			) : (
				<div></div>
			)}
			<div className='header--iconMenu' onClick={() => setClick(!click)}>
				<span className={click ? "first--child" : ""}></span>
				<span className={click ? "second--child" : ""}></span>
				<span className={click ? "third--child" : ""}></span>
			</div>
			{click && (
				<div className='header--menu--mobile'>
					<img
						className='header--mobile--logo'
						src={Logo}
						alt='goScrum app logo'
					/>
					<div className='header--mobile--user'>✅ {user}</div>
					<div className='header--mobile--countTasks'>
						🔢 Tareas creadas: {tasks?.length} <span></span>
					</div>
					<button
						onClick={() => navigate("/donate", { replace: true })}
						className='header--button--donate'
					>
						Donar
					</button>
					<button
						className='header--button--logout'
						onClick={handleLogOut}
					>
						Cerrar Sesion
					</button>
				</div>
			)}
		</header>
	);
};
