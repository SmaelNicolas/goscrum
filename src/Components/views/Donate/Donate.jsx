import React from "react";
import { FaDonate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./donate.css";

export const Donate = () => {
	const navigate = useNavigate();
	return (
		<div className='donate--container'>
			<h2 className='donate--title'>Colabora con nosotros</h2>
			<a
				className='donate--link'
				href='https://mpago.la/1haC6Zw'
				target='_blank'
				rel='noreferrer'
			>
				Donar
			</a>
			<FaDonate className='donate--icon' />
			<button
				className='header--button--donate donate--back'
				onClick={() => navigate("/", { replace: true })}
			>
				Volver a Tareas
			</button>
		</div>
	);
};
