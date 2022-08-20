import { FormControlLabel, Switch } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { GET_Data } from "../../../../APIs/fetchGETSelectors";
import { POST_Register } from "../../../../APIs/fetchPOSTRegister";
import RegisterImg from "../../../../assets/register.svg";

import "./register.css";

export const Register = () => {
	const [data, setData] = useState();

	const navigate = useNavigate();

	const initialValues = {
		userName: "",
		password: "",
		email: "",
		teamID: "",
		role: "",
		continent: "",
		region: "",
		switch: false,
	};

	const requiered = "* Campo Obligatorio";

	const validationSchema = () =>
		Yup.object().shape({
			userName: Yup.string()
				.min(4, "Debe ser mayor a 3")
				.required(requiered),
			password: Yup.string().required(requiered),
			email: Yup.string()
				.email("Debe ser un email válido")
				.required(requiered),
			// teamID: Yup.string().required(requiered),
			role: Yup.string().required(requiered),
			continent: Yup.string().required(requiered),
			region: Yup.string().required(requiered),
		});

	const handleChangeContinent = (value) => {
		setFieldValue("continent", value);
		if (value !== "America") setFieldValue("region", "Otro");
	};

	const onSubmit = () => {
		POST_Register(values, navigate);
	};

	const formik = useFormik({ initialValues, validationSchema, onSubmit });

	const {
		handleSubmit,
		handleChange,
		values,
		errors,
		touched,
		handleBlur,
		setFieldValue,
	} = formik;

	useEffect(() => {
		GET_Data(setData);
	}, []);

	return (
		<div className='register'>
			<h1 className='register--title'>Registro de usuario</h1>
			<form onSubmit={handleSubmit} className='register--container'>
				<div className='login--icon'>
					<img
						className='login--icon--img'
						src={RegisterImg}
						alt='user icon'
					/>
				</div>
				<div className='register--form--section'>
					<label className='register--form--label'>
						Nombre de usuario
					</label>
					<input
						name='userName'
						type='text'
						value={values.userName}
						onChange={handleChange}
						onBlur={handleBlur}
						className={`register--form--input ${
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
				<div className='register--form--section'>
					<label className='register--form--label'>Email</label>
					<input
						name='email'
						type='email'
						value={values.email}
						onChange={handleChange}
						onBlur={handleBlur}
						className={`register--form--input ${
							errors.email
								? "form--input--incorrect"
								: "form--input--correct"
						}`}
					/>
				</div>
				<div className='form--input--error'>
					{errors.email && touched.email && <div>{errors.email}</div>}
				</div>
				<div className='register--form--section'>
					<label className='register--form--label'>Contraseña</label>
					<input
						type='password'
						name='password'
						value={values.password}
						onChange={handleChange}
						onBlur={handleBlur}
						className={`register--form--input ${
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
				<div className='register--form--section'>
					<label className='register--form--label'>Rol</label>
					<select
						name='role'
						value={values.role}
						onChange={handleChange}
						onBlur={handleBlur}
						className={`register--form--input ${
							errors.role
								? "form--input--incorrect"
								: "form--input--correct"
						}`}
					>
						<option value=''>Seleccionar Rol</option>
						{data?.Rol.map((rol) => (
							<option value={rol} key={rol}>
								{rol}
							</option>
						))}
					</select>
				</div>
				<div className='form--input--error'>
					{errors.role && touched.role && <div>{errors.role}</div>}
				</div>
				<div className='register--form--section'>
					<label className='register--form--label'>Continente</label>
					<select
						name='continent'
						value={values.continent}
						onChange={(e) =>
							handleChangeContinent(e.currentTarget.value)
						}
						onBlur={handleBlur}
						className={`register--form--input ${
							errors.continent
								? "form--input--incorrect"
								: "form--input--correct"
						}`}
					>
						<option value=''>Seleccionar Continente</option>
						{data?.continente.map((cont) => (
							<option value={cont} key={cont}>
								{cont}
							</option>
						))}
					</select>
				</div>
				<div className='form--input--error'>
					{errors.continent && touched.continent && (
						<div>{errors.continent}</div>
					)}
				</div>
				{values.continent === "America" && (
					<div className='register--form--section'>
						<label className='register--form--label'>Región</label>
						<select
							name='region'
							value={values.region}
							onChange={handleChange}
							onBlur={handleBlur}
							className={`register--form--input ${
								errors.region
									? "form--input--incorrect"
									: "form--input--correct"
							}`}
						>
							<option value=''>Seleccionar region ...</option>
							{data?.region.map((reg) => (
								<option value={reg} key={reg}>
									{reg}
								</option>
							))}
						</select>
					</div>
				)}
				{values.continent === "America" && (
					<div className='form--input--error'>
						{errors.region && touched.region && (
							<div>{errors.region}</div>
						)}
					</div>
				)}

				<div className='register--form--section--switch'>
					<FormControlLabel
						control={
							<Switch
								value={values.switch}
								onChange={() =>
									formik.setFieldValue(
										"switch",
										!formik.values.switch
									)
								}
								name='switch'
								color='secondary'
							/>
						}
						label='¿Ya pertenecés a un equipo?'
						className='register--control--label'
					/>
					{values.switch && (
						<div className='register--form--section'>
							<label className='register--form--label'>ID </label>
							<input
								type='text'
								name='teamID'
								value={values.teamID}
								onChange={handleChange}
								className={`register--form--input ${
									errors.teamID
										? "form--input--incorrect"
										: "form--input--correct"
								}`}
							/>
						</div>
					)}
					<div className='form--input--error'>
						{errors.teamID && touched.teamID && (
							<div>{errors.teamID}</div>
						)}
					</div>
				</div>

				<div>
					<button type='submit' className='register--button--send'>
						Crear Usuario
					</button>
				</div>
				<div className='register--form--help--text'>
					¿Ya tienes una cuenta?
				</div>

				<div>
					<Link to='/login' className='register--link--othersection'>
						Iniciar Sesion
					</Link>
				</div>
			</form>
		</div>
	);
};
