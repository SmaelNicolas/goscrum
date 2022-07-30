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
import { getTasks } from "../../../store/actions/tasksActions";

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
			setListByType(tasks);
		}
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

	const renderAllCards = () => {
		return list?.map((data) => <Card key={data._id} data={data} />);
	};
	const renderCardsByType = (value) => {
		return listByType
			?.filter((card) => card.status === value)
			.map((data) => <Card key={data._id} data={data} />);
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
		<div>
			<Header />
			<TaskForm />
			<main id='tasks'>
				<h2>Mis tareas</h2>
				<div>
					<FormControl>
						<RadioGroup
							row
							aria-labelledby='demo-row-radio-buttons-group-label'
							onChange={(e) => {
								setTaskMAdeBy(e.currentTarget.value);
							}}
						>
							<FormControlLabel
								value='ALL'
								control={<Radio />}
								label='Todas'
							/>
							<FormControlLabel
								value='ME'
								control={<Radio />}
								label='Mis tareas'
							/>
						</RadioGroup>
					</FormControl>
					<div>
						<input
							type='text'
							placeholder='Buscar por titulo ...'
							onChange={(e) => {
								handleSearch(e?.target?.value);
							}}
						/>
					</div>
					<select
						name='importance'
						onChange={(e) => {
							handleChangeImportance(e.currentTarget.value);
						}}
					>
						<option value=''>Seleccionar una prioridad</option>
						<option value='ALL'>Todas</option>
						<option value='LOW'>Baja</option>
						<option value='MEDIUM'>Media</option>
						<option value='HIGH'>Alta</option>
					</select>
				</div>
				{error ? (
					<div>hay un error</div>
				) : !list.length ? (
					<div>No existen tareas creadas</div>
				) : loading ? (
					<Skeleton />
				) : isMobile ? (
					<section>
						<div id='list cards'>
							<h4>EN TELEFONO</h4>
							{renderAllCards()}
						</div>
					</section>
				) : (
					<section>
						<h2>DESKTOP</h2>
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
			</main>
		</div>
	);
};
