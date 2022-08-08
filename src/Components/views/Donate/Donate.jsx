import React from "react";
import { useNavigate } from "react-router-dom";
import "./donate.css";
import imgDonate from "../../../assets/donate.jpg";

export const Donate = () => {
	const navigate = useNavigate();
	return (
		<div className='donate--container'>
			<h2 className='h2--title'>Colabora con nosotros</h2>
			<a
				className='donate--link'
				href='https://mpago.la/1haC6Zw'
				target='_blank'
				rel='noreferrer'
			>
				Donar
			</a>
			<img className='donate--img' src={imgDonate} alt='donate' />
			<button
				className='header--button--donate'
				onClick={() => navigate("/", { replace: true })}
			>
				Volver a Tareas
			</button>
		</div>
	);
};
