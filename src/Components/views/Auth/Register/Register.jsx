// https://formik.org/docs/overview
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

export const Register = () => {
	const [data, setData] = useState();

	useEffect(() => {
		fetch("https://goscrum-api.alkemy.org/auth/data")
			.then((response) => response.json())
			.then((dat) => setData(dat.result));
	}, []);

	console.log(data);

	const initialValues = {
		userName: "",
		password: "",
		email: "",
		// teamID: "",
		role: "",
		continent: "",
		region: "",
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
			role: Yup.string().required(requiered),
			continent: Yup.string().required(requiered),
			region: Yup.string().required(requiered),
		});

	const onSubmit = () => {
		alert();
	};

	const formik = useFormik({ initialValues, validationSchema, onSubmit });

	const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
		formik;

	return (
		<form onSubmit={handleSubmit}>
			<h1>Registro</h1>
			<div>
				<label>Nombre de usuario</label>
				<input
					name='userName'
					type='text'
					value={values.userName}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.userName && touched.userName && (
					<div>{errors.userName}</div>
				)}
			</div>
			<div>
				<label>Email</label>
				<input
					name='email'
					type='email'
					value={values.email}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.email && touched.email && <div>{errors.email}</div>}
			</div>
			<div>
				<label>Contraseña</label>
				<input
					type='password'
					name='password'
					value={values.password}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.password && touched.password && (
					<div>{errors.password}</div>
				)}
			</div>
			<div>
				<label>Rol</label>
				<select
					name='role'
					value={values.role}
					onChange={handleChange}
					onBlur={handleBlur}
				>
					<option value=''>Seleccionar rol ...</option>
					{data?.Rol.map((rol) => (
						<option value={rol} key={rol}>
							{rol}
						</option>
					))}
				</select>
				{errors.role && touched.role && <div>{errors.role}</div>}
			</div>
			<div>
				<label>Continente</label>
				<select
					name='continent'
					value={values.continent}
					onChange={handleChange}
					onBlur={handleBlur}
				>
					<option value=''>Seleccionar continente ...</option>
					{data?.continente.map((cont) => (
						<option value={cont} key={cont}>
							{cont}
						</option>
					))}
				</select>
				{errors.continent && touched.continent && (
					<div>{errors.continent}</div>
				)}
			</div>
			{values.continent === "America" && (
				<div>
					<label>Region</label>
					<select
						name='region'
						value={values.region}
						onChange={handleChange}
						onBlur={handleBlur}
					>
						<option value=''>Seleccionar region ...</option>
						{data?.region.map((reg) => (
							<option value={reg} key={reg}>
								{reg}
							</option>
						))}
					</select>
					{errors.region && touched.region && (
						<div>{errors.region}</div>
					)}
				</div>
			)}
			<input type='hidden' name='teamId' value='' />

			<div>
				<button type='submit'>Enviar</button>
			</div>
			<div>
				<Link to='/login'>Iniciar Sesion</Link>
			</div>
		</form>
	);
};
