import { useEffect, useState } from "react";
import { useResize } from "../../../Hooks/useResize";
import { Card } from "../../Card/Card";
import { Header } from "../../Header/Header";
import { TaskForm } from "../../TaskForm/TaskForm";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import debounce from "lodash.debounce";
import {
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
	deleteTask,
	editTaskStatus,
	getTasks,
} from "../../../store/actions/tasksActions";

import "./task.css";

export const Tasks = () => {
	const { isMobile } = useResize();
	const [list, setList] = useState([]);
	const [listByType, setListByType] = useState([]);
	const [taskMadeBy, setTaskMAdeBy] = useState("ALL");
	const [search, setSearch] = useState();
	const dispatch = useDispatch();

	const { loading, error, tasks } = useSelector((state) => {
		return state.taskReducer;
	});

	useEffect(() => {
		if (tasks?.length) {
			setList(tasks);
		}
		setListByType(tasks);
	}, [tasks]);

	useEffect(() => {
		dispatch(getTasks(taskMadeBy === "ME" ? "me" : ""));
	}, [taskMadeBy]);

	useEffect(() => {
		if (search) {
			setListByType(
				list.filter((task) => task.title.toLowerCase().includes(search))
			);
		} else {
			setListByType(list);
		}
	}, [search]);

	const handleDelete = (id) => dispatch(deleteTask(id));
	const handleEditStatus = (data) => dispatch(editTaskStatus(data));

	const renderAllCards = () => {
		return listByType?.map((data) => (
			<Card
				deleteTask={handleDelete}
				key={data._id}
				data={data}
				editTasksStatus={handleEditStatus}
			/>
		));
	};

	const renderCardsByType = (value) => {
		return listByType
			?.filter((card) => card.status === value)
			.map((data) => (
				<Card
					deleteTask={handleDelete}
					key={data._id}
					data={data}
					editTasksStatus={handleEditStatus}
				/>
			));
	};

	const handleChangeImportance = (importance) => {
		importance !== "ALL"
			? setListByType(
					list.filter((task) => task.importance === importance)
			  )
			: setListByType(list);
	};

	const handleSearch = debounce((value) => {
		setSearch(value);
	}, 2000);

	return (
		<div className='big--container'>
			<Header />
			<TaskForm />
			<h2 className='h2--title'>Mis Tareas</h2>
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
				<div>hay un error</div>
			) : !listByType.length ? (
				<div>No existen tareas creadas</div>
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
			)}
		</div>
	);
};
