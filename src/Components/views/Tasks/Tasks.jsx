import { useState } from "react";
import { Header } from "../../Header/Header";
import { TaskForm } from "../../TaskForm/TaskForm";
import "react-loading-skeleton/dist/skeleton.css";

import "./task.css";
import { TaskViews } from "../../TaskViews/TaskViews";

export const Tasks = () => {
	const [user] = useState(localStorage.getItem("user"));
	const [create, setCreate] = useState(false);
	const [view, setView] = useState(false);

	const viewCreate = () => {
		setCreate(true);
		setView(false);
	};
	const viewSearch = () => {
		setCreate(false);
		setView(true);
	};

	return (
		<div className='big--container'>
			<Header />
			<div className='welcome--container'>
				<div className='welcome--name'>Hola 🖐 {user}</div>
				<div className='welcome--text'>¿Que queres realizar?</div>
				<div className='welcome--panel'>
					<div className='welcome--options' onClick={viewCreate}>
						<div className='welcome--icons'>➕</div>
						<div className='welcome--action'>crear tareas</div>
					</div>
					<div className='welcome--options' onClick={viewSearch}>
						<div className='welcome--icons'>🔎</div>

						<div className='welcome--action'>ver tareas</div>
					</div>
				</div>
			</div>
			{create && <TaskForm />}
			{view && <TaskViews />}
			{/* <h2 className='h2--title'>Ver Tareas</h2>
			<div className='filters'>
				<div className='tasks--filter'>
					<div className='tasks--filter--label'>Buscar :</div>
					<FormControl>
						<RadioGroup
							column='true'
							aria-labelledby='demo-row-radio-buttons-group-label'
							className='tasks--filter--created'
							onChange={(e) => {
								setTaskMAdeBy(e.currentTarget.value);
							}}
						>
							<FormControlLabel
								value='ALL'
								control={<Radio />}
								label='Creadas por mi grupo'
							/>
							<FormControlLabel
								value='ME'
								control={<Radio />}
								label='Creadas por mi'
							/>
						</RadioGroup>
					</FormControl>
				</div>
				<div className='tasks--filter'>
					<div className='tasks--filter--label'>
						Buscar por titulo
					</div>
					<input
						type='text'
						placeholder='Buscar por titulo ...'
						onChange={(e) => {
							handleSearch(e?.target?.value);
						}}
						className='form--input  '
					/>
				</div>
				<div className='tasks--filter'>
					<div className='tasks--filter--label'>
						Buscar por prioridad
					</div>

					<select
						name='importance'
						onChange={(e) => {
							handleChangeImportance(e.currentTarget.value);
						}}
						className='task--filter--priority'
					>
						<option value='ALL'>Todas</option>
						<option value='LOW'>Baja</option>
						<option value='MEDIUM'>Media</option>
						<option value='HIGH'>Alta</option>
					</select>
				</div>
			</div>

			{error ? (
				<ApiError />
			) : !listByType.length ? (
				<NoTasksError />
			) : loading ? (
				<Skeleton />
			) : isMobile ? (
				<section>
					<div id='list cards' className='task--card--container'>
						{renderAllCards()}
					</div>
				</section>
			) : (
				<section>
					<div>
						<h4>Nuevas</h4>
						{renderCardsByType("NEW")}
					</div>
					<div>
						<h4>En Progreso</h4>
						{renderCardsByType("IN PROGRESS")}
					</div>
					<div>
						<h4>Finalizadas</h4>
						{renderCardsByType("FINISHED")}
					</div>
				</section>
			)} */}
		</div>
	);
};
