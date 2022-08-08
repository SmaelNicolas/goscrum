import "./screenErrors.css";

export const NoTasksError = () => {
	return (
		<div className='error--container'>
			<div>❌</div>
			<div>No existen tareas creadas!</div>
		</div>
	);
};
