import { useEffect, useState } from "react";

import {
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
} from "@mui/material";

import Skeleton from "react-loading-skeleton";
import { ApiError } from "../ScreenErrors/ApiError";
import { NoTasksError } from "../ScreenErrors/NoTasksError";
import { useResize } from "../../Hooks/useResize";
import debounce from "lodash.debounce";
import { Card } from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import {
	deleteTask,
	editTaskStatus,
	getTasks,
} from "../../store/actions/tasksActions";

import "./taskView.css";
import { MobileView } from "./MobileView/MobileView";
import { DesktopView } from "./DesktopView/DesktopView";

export const TaskViews = () => {
	const { isMobile } = useResize();

	const [search, setSearch] = useState();
	const [list, setList] = useState([]);
	const [listByType, setListByType] = useState([]);
	const [taskMadeBy, setTaskMAdeBy] = useState("ALL");

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [taskMadeBy]);

	useEffect(() => {
		if (search) {
			setListByType(
				list.filter((task) => task.title.toLowerCase().includes(search))
			);
		} else {
			setListByType(list);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search]);

	const handleSearch = debounce((value) => {
		setSearch(value);
	}, 2000);

	const handleChangeImportance = (importance) => {
		importance !== "ALL"
			? setListByType(
					list.filter((task) => task.importance === importance)
			  )
			: setListByType(list);
	};

	const handleDelete = (id) => dispatch(deleteTask(id));
	const handleEditStatus = (data) => dispatch(editTaskStatus(data));

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

	return (
		<>
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
				<MobileView renderCardsByType={renderCardsByType} />
			) : (
				<DesktopView renderCardsByType={renderCardsByType} />
			)}
		</>
	);
};
