import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { postTask } from "../../store/actions/tasksActions";
import "./taskForm.css";

export const TaskForm = () => {
	const dispatch = useDispatch();

	const initialValues = {
		title: "",
		status: "",
		importance: "",
		description: "",
	};

	const requiered = "* Campo Obligatorio";

	const validationSchema = Yup.object().shape({
		title: Yup.string()
			.min(4, "Minimo 4 caracteres")
			.max(13, "Maximo 13 caracteres")
			.required(requiered),
		status: Yup.string().required(requiered),
		importance: Yup.string().required(requiered),
		description: Yup.string().required(requiered),
	});

	const onSubmit = () => {
		dispatch(postTask(values, resetForm));
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
		<div className='taskForm--container'>
			<h2 className='taskForm--title'>nueva tarea</h2>
			<form onSubmit={handleSubmit} className='task--form--container'>
				<div className='task--form--section'>
					<label className='task--form--label'>Título</label>
					<input
						value={values.title}
						name='title'
						onChange={handleChange}
						onBlur={handleBlur}
						className={`form--input--task ${
							errors.title
								? "form--input--incorrect"
								: "form--input--correct"
						}`}
					/>
				</div>
				<div className='taskForm--input--error'>
					{errors.title && touched.title && (
						<span>{errors.title}</span>
					)}
				</div>
				<div className='task--form--section'>
					<label className='task--form--label'>Status</label>
					<select
						value={values.status}
						name='status'
						id=''
						onChange={handleChange}
						onBlur={handleBlur}
						className={`form--input--task ${
							errors.status
								? "form--input--incorrect"
								: "form--input--correct"
						}`}
					>
						<option value=''>Seleccionar Opcion</option>
						<option value='NEW'>Nueva</option>
						<option value='IN PROGRESS'>En Proceso</option>
						<option value='FINISHED'>Terminada</option>
					</select>
				</div>
				<div className='taskForm--input--error'>
					{errors.status && touched.status && (
						<span>{errors.status}</span>
					)}
				</div>
				<div className='task--form--section'>
					<label className='task--form--label'>Prioridad</label>
					<select
						value={values.importance}
						name='importance'
						id=''
						onChange={handleChange}
						onBlur={handleBlur}
						className={`form--input--task ${
							errors.importance
								? "form--input--incorrect"
								: "form--input--correct"
						}`}
					>
						<option value=''>Seleccionar Opcion</option>
						<option value='LOW'>Baja</option>
						<option value='MEDIUM'>Media</option>
						<option value='HIGH'>Alta</option>
					</select>
				</div>
				<div className='taskForm--input--error'>
					{errors.importance && touched.importance && (
						<span>{errors.importance}</span>
					)}
				</div>
				<div className='task--form--section'>
					<label className='task--form--label'>Descripción</label>
					<textarea
						name='description'
						id=''
						cols='30'
						rows='10'
						value={values.description}
						onChange={handleChange}
						onBlur={handleBlur}
						className={`form--input--task ${
							errors.description
								? "form--input--incorrect"
								: "form--input--correct"
						}`}
					/>
				</div>
				<div className='taskForm--input--error'>
					{errors.description && touched.description && (
						<span>{errors.description}</span>
					)}
				</div>
				<div className='task--form--section'>
					<button type='submit' className='taskForm--button--send'>
						Crear
					</button>
				</div>
			</form>
			<ToastContainer />
		</div>
	);
};
