import { useFormik } from "formik";

export const Login = () => {
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");

	const initialValues = {
		email: "",
		password: "",
	};

	const validate = (values) => {
		const errors = {};

		if (!values.email) {
			errors.email = "El email es requerido";
		}
		if (!values.password) {
			errors.password = "El password es requerido";
		}

		return errors;
	};

	const onSubmit = () => {
		localStorage.setItem("logged", "yes");
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
