import { useFormik } from "formik";
import * as Yup from "yup";

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

export const TaskForm = () => {
	const initialValues = {
		title: "",
		status: "",
		importance: "",
		description: "",
	};

	const requiered = "* Campo Obligatorio";

	const validationSchema = Yup.object().shape({
		title: Yup.string()
			.min(6, "La cantidad minima es 6")
			.required(requiered),
		status: Yup.string().required(requiered),
		importance: Yup.string().required(requiered),
		description: Yup.string().required(requiered),
	});

	const onSubmit = () => {
		fetch(`${API_ENDPOINT}task`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + localStorage.getItem("token"),
			},
			body: JSON.stringify({
				task: values,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				alert("tu tarea se creo");
				resetForm();
			});
	};

	const formik = useFormik({ initialValues, validationSchema, onSubmit });

	const {
		handleSubmit,
		handleChange,
		errors,
		touched,
		handleBlur,
		values,
		resetForm,
	} = formik;

	return (
		<div>
			<h2>Crear Tarea</h2>
			<p>Crea tus tareas</p>
			<form onSubmit={handleSubmit}>
				<div>
					<div>
						<input
							value={values.title}
							name='title'
							placeholder='Titulo'
							onChange={handleChange}
							onBlur={handleBlur}
							className={errors.title ? "error" : "sinError"}
						/>
						{errors.title && touched.title && (
							<span>{errors.title}</span>
						)}
					</div>
					<div>
						<select
							value={values.status}
							name='status'
							id=''
							onChange={handleChange}
							onBlur={handleBlur}
							className={errors.title ? "error" : "sinError"}
						>
							<option value=''>Seleccionar Opcion</option>
							<option value='NEW'>Nueva</option>
							<option value='IN PROGRESS'>En Proceso</option>
							<option value='FINISHED'>Terminada</option>
						</select>
						{errors.status && touched.status && (
							<span>{errors.status}</span>
						)}
					</div>
					<div>
						<select
							value={values.importance}
							name='importance'
							id=''
							onChange={handleChange}
							onBlur={handleBlur}
							className={errors.title ? "error" : "sinError"}
						>
							<option value=''>Seleccionar Opcion</option>
							<option value='LOW'>Baja</option>
							<option value='MEDIUM'>Media</option>
							<option value='HIGH'>Alta</option>
						</select>
						{errors.importance && touched.importance && (
							<span>{errors.importance}</span>
						)}
					</div>
				</div>
				<div>
					<textarea
						name='description'
						id=''
						cols='30'
						rows='10'
						placeholder='Descripcion'
						value={values.description}
						onChange={handleChange}
						onBlur={handleBlur}
						className={errors.title ? "error" : "sinError"}
					/>
					{errors.description && touched.description && (
						<span>{errors.description}</span>
					)}
				</div>
				<button type='submit'>Crear</button>
			</form>
		</div>
	);
};
