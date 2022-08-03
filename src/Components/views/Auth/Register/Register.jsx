import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Switch, FormControlLabel } from "@mui/material";
import { POST_Register } from "../../../../APIs/fetchPOSTRegister";
import { GET_Data } from "../../../../APIs/fetchGETSelectors";
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
				.email("Debe ser un email valido")
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
		<div className='big--container'>
			<form onSubmit={handleSubmit} className='form--container'>
				<h1 className='h1--title'>Registro</h1>
				<div className='register--form--section'>
					<label className='form--label'>Nombre de usuario</label>
					<input
						name='userName'
						type='text'
						value={values.userName}
						onChange={handleChange}
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
				<div className='register--form--section'>
					<label className='form--label'>Email</label>
					<input
						name='email'
						type='email'
						value={values.email}
						onChange={handleChange}
						onBlur={handleBlur}
						className={`form--input ${
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
					<label className='form--label'>Contraseña</label>
					<input
						type='password'
						name='password'
						value={values.password}
						onChange={handleChange}
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
				<div className='register--form--section'>
					<label className='form--label'>Rol</label>
					<select
						name='role'
						value={values.role}
						onChange={handleChange}
						onBlur={handleBlur}
						className={`form--input ${
							errors.role
								? "form--input--incorrect"
								: "form--input--correct"
						}`}
					>
						<option value=''>Seleccionar rol ...</option>
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
					<label className='form--label'>Continente</label>
					<select
						name='continent'
						value={values.continent}
						onChange={(e) =>
							handleChangeContinent(e.currentTarget.value)
						}
						onBlur={handleBlur}
						className={`form--input ${
							errors.continent
								? "form--input--incorrect"
								: "form--input--correct"
						}`}
					>
						<option value=''>Seleccionar continente ...</option>
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
						<label className='form--label'>Region</label>
						<select
							name='region'
							value={values.region}
							onChange={handleChange}
							onBlur={handleBlur}
							className={`form--input ${
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
				<div className='form--input--error'>
					{errors.region && touched.region && (
						<div>{errors.region}</div>
					)}
				</div>

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
				/>
				{values.switch && (
					<div className='register--form--section'>
						<label className='form--label'>ID </label>
						<input
							type='text'
							name='teamID'
							value={values.teamID}
							onChange={handleChange}
						/>
					</div>
				)}
				<div className='form--input--error'>
					{errors.teamID && touched.teamID && (
						<div>{errors.teamID}</div>
					)}
				</div>

				<div>
					<button type='submit' className='button--send'>
						Crear Usuario
					</button>
				</div>
				<div className='form--help--text'>¿Ya tenes una cuenta?</div>

				<div>
					<Link to='/login' className='link--othersection'>
						Iniciar Sesion
					</Link>
				</div>
			</form>
		</div>
	);
};
