import React, { useState } from "react";
import { BiUserCheck } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo.png";

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
					<div className='header--mobile--info '>
						<BiUserCheck className='header--desktop--icon' /> {user}
					</div>
					<div className='header--mobile--info '>
						<BsListTask className='header--desktop--icon' />
						Tareas creadas: {tasks?.length ?? 0}
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
