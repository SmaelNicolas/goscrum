import React from "react";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";

import "./login.css";
import { POST_Login } from "../../../../APIs/fetchPOSTLogin";

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
		<div className='big--container'>
			<h1 className='h1--title'>Iniciar Sesión</h1>
			<form onSubmit={handleSubmit} className='form--container'>
				<div className='login--form--section'>
					<label className='form--label'>Usuario</label>
					<input
						type='text'
						name='userName'
						onChange={handleChange}
						value={values.userName}
						onBlur={handleBlur}
						className={`form--input ${
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
					<label className='form--label'>Contraseña</label>
					<input
						type='password'
						name='password'
						onChange={handleChange}
						value={values.password}
						onBlur={handleBlur}
						className={`form--input ${
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
					<button type='submit' className='button--send'>
						Enviar
					</button>
				</div>
				<div className='form--help--text'>¿No tenes una cuenta?</div>
				<div>
					<Link to='/register' className='link--othersection'>
						Registrarme
					</Link>
				</div>
			</form>
		</div>
	);
};
