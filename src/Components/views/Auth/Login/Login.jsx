import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import UserImg from "../../../../assets/user.svg";

import { POST_Login } from "../../../../APIs/fetchPOSTLogin";
import "./login.css";

export const Login = () => {
	const navigate = useNavigate();

	const initialValues = {
		userName: "",
		password: "",
	};

	const required = "* Campo obligatorio";

	const validationSchema = () =>
		Yup.object().shape({
			userName: Yup.string()
				.min(4, "Minimo 4 caracteres")
				.required(required),
			password: Yup.string().required(required),
		});

	const onSubmit = () => {
		const { userName, password } = values;
		POST_Login(userName, password, navigate);
	};

	const formik = useFormik({ initialValues, validationSchema, onSubmit });

	const { handleSubmit, handleChange, errors, touched, handleBlur, values } =
		formik;

	return (
		<div className='login '>
			<h1 className='login--title'>Iniciar Sesión</h1>
			<form onSubmit={handleSubmit} className='login--container'>
				<div className='login--icon'>
					<img
						className='login--icon--img'
						src={UserImg}
						alt='user icon'
					/>
				</div>
				<div className='login--form--section'>
					<label className='login--label'>Usuario</label>
					<input
						type='text'
						name='userName'
						onChange={handleChange}
						value={values.userName}
						onBlur={handleBlur}
						className={`login--form--input ${
							errors.userName
								? "form--input--incorrect"
								: "form--input--correct"
						}`}
					/>
				</div>
				<div className='form--input--error'>
					{errors.userName && touched.userName && (
						<div>{errors.userName}</div>
					)}
				</div>
				<div className='login--form--section'>
					<label className='login--label'>Contraseña</label>
					<input
						type='password'
						name='password'
						onChange={handleChange}
						value={values.password}
						onBlur={handleBlur}
						className={`login--form--input ${
							errors.password
								? "form--input--incorrect"
								: "form--input--correct"
						}`}
					/>
				</div>
				<div className='form--input--error'>
					{errors.password && touched.password && (
						<div>{errors.password}</div>
					)}
				</div>
				<div>
					<button type='submit' className='login--button--send'>
						Enviar
					</button>
				</div>
				<div className='login--form--help--text'>
					¿No tenes una cuenta?
				</div>
				<div>
					<Link to='/register' className='login--link--othersection'>
						Registrarme
					</Link>
				</div>
			</form>
		</div>
	);
};
