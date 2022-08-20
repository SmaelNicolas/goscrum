import { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { Header } from "../../Header/Header";
import { TaskForm } from "../../TaskForm/TaskForm";

import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { getTasks } from "../../../store/actions/tasksActions";
import { TaskViews } from "../../TaskViews/TaskViews";
import "./task.css";

export const Tasks = () => {
	const dispatch = useDispatch();

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
		<div className='task--container'>
			<Header />
			<div className='welcome--panel'>
				<div className='welcome--options' onClick={viewCreate}>
					<div className='welcome--icons'>
						<AiOutlinePlus />
					</div>
					<div className='welcome--action'>crear tarea</div>
				</div>
				<div className='welcome--options' onClick={viewSearch}>
					<div className='welcome--icons'>
						<AiOutlineSearch />
					</div>
					<div className='welcome--action'>ver tareas</div>
				</div>
			</div>
			{create && <TaskForm />}
			{view && <TaskViews />}
		</div>
	);
};
