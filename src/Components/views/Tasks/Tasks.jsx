import { useState, useEffect } from "react";
import { Header } from "../../Header/Header";
import { TaskForm } from "../../TaskForm/TaskForm";
import "react-loading-skeleton/dist/skeleton.css";

import "./task.css";
import { TaskViews } from "../../TaskViews/TaskViews";
import { getTasks } from "../../../store/actions/tasksActions";
import { useDispatch } from "react-redux";

export const Tasks = () => {
	const dispatch = useDispatch();

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

	useEffect(() => {
		dispatch(getTasks(""));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
		</div>
	);
};
