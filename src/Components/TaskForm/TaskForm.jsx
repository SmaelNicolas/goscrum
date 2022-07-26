import { useFormik } from "formik";
import * as Yup from "yup";

export const TaskForm = () => {
	const initialValues = {
		title: "",
		status: "",
		priority: "",
		description: "",
		textarea: "",
	};

	const onSubmit = () => {
		alert();
	};

	const requiered = "* Campo Obligatorio";

	const validationSchema = Yup.object().shape({
		title: Yup.string()
			.min(6, "La cantidad minima es 6")
			.required(requiered),
		status: Yup.string().required(requiered),
		priority: Yup.string().required(requiered),
		textarea: Yup.string().required(requiered),
	});

	const formik = useFormik({ initialValues, validationSchema, onSubmit });
	const { handleSubmit, handleChange, errors, touched, handleBlur } = formik;

	return (
		<div>
			<h2>Crear Tarea</h2>
			<p>Crea tus tareas</p>
			<form onSubmit={handleSubmit}>
				<div>
					<div>
						<input
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
							name='status'
							id=''
							onChange={handleChange}
							onBlur={handleBlur}
							className={errors.title ? "error" : "sinError"}
						>
							<option value=''>Seleccionar Opcion</option>
							<option value='new'>Nueva</option>
							<option value='inProcess'>En Proceso</option>
							<option value='finished'>Terminada</option>
						</select>
						{errors.status && touched.status && (
							<span>{errors.status}</span>
						)}
					</div>
					<div>
						<select
							name='priority'
							id=''
							onChange={handleChange}
							onBlur={handleBlur}
							className={errors.title ? "error" : "sinError"}
						>
							<option value=''>Seleccionar Opcion</option>
							<option value='low'>Baja</option>
							<option value='medium'>Media</option>
							<option value='high'>Alta</option>
						</select>
						{errors.priority && touched.priority && (
							<span>{errors.priority}</span>
						)}
					</div>
				</div>
				<div>
					<textarea
						name='textarea'
						id=''
						cols='30'
						rows='10'
						placeholder='Descripcion'
						onChange={handleChange}
						onBlur={handleBlur}
						className={errors.title ? "error" : "sinError"}
					/>
					{errors.textarea && touched.textarea && (
						<span>{errors.textarea}</span>
					)}
				</div>
				<button type='submit'>Crear</button>
			</form>
		</div>
	);
};
