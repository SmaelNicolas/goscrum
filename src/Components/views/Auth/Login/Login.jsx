import React from "react";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { swal } from "../../../../utils/swal";

import "./login.css";

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

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

		fetch(`${API_ENDPOINT}auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				userName,
				password,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.status_code === 200) {
					localStorage.setItem("token", data?.result?.token);
					localStorage.setItem("user", data?.result?.user.userName);
					navigate("/", { replace: true });
				} else {
					swal();
				}
			});
	};

	const formik = useFormik({ initialValues, validationSchema, onSubmit });

	const { handleSubmit, handleChange, errors, touched, handleBlur, values } =
		formik;

	return (
		<div className='big--container'>
			<h1 className='h1--title'>Iniciar Sesión</h1>
			<form onSubmit={handleSubmit} className='form--container'>
				<div className='login--form--section'>
					<label className='login--form--label'>Usuario</label>
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
				<div className='login--input--error'>
					{errors.userName && touched.userName && (
						<div>{errors.userName}</div>
					)}
				</div>
				<div className='login--form--section'>
					<label className='login--form--label'>Contraseña</label>
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
				<div className='login--input--error'>
					{errors.password && touched.password && (
						<div>{errors.password}</div>
					)}
				</div>
				<div>
					<button
						type='submit'
						className='button--send'
						disabled={
							errors.password === undefined &&
							errors.userName === undefined
						}
					>
						Enviar
					</button>
				</div>
				<div className='login--help--text'>¿No tenes una cuenta?</div>
				<div>
					<Link to='/register' className='login--link--register'>
						Registrarme
					</Link>
				</div>
			</form>
		</div>
	);
};
