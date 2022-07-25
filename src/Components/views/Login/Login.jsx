// https://formik.org/docs/overview
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const navigate = useNavigate();

	const initialValues = {
		email: "",
		password: "",
	};

	const validate = (values) => {
		const errors = {};

		if (!values.email) {
			errors.email = "El email es requerido";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
		) {
			errors.email = "El email no es valido";
		}
		if (!values.password) {
			errors.password = "El password es requerido";
		}

		return errors;
	};

	const onSubmit = () => {
		localStorage.setItem("logged", "yes");
		navigate("/", { replace: true });
	};

	const formik = useFormik({ initialValues, validate, onSubmit });

	const { handleSubmit, handleChange, values, errors } = formik;

	return (
		<form onSubmit={handleSubmit}>
			<h1>Iniciar Sesion</h1>
			<div>
				<label>Email</label>
				<input
					name='email'
					type='email'
					value={values.email}
					onChange={handleChange}
				/>
				{errors.email && <div>{errors.email}</div>}
			</div>
			<div>
				<label>Contraseña</label>
				<input
					type='password'
					name='password'
					value={values.password}
					onChange={handleChange}
				/>
				{errors.password && <div>{errors.password}</div>}
			</div>
			<div>
				<button type='submit'>Enviar</button>
			</div>
		</form>
	);
};
