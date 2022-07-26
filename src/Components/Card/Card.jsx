import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./card.css";

export const Card = ({
	deleteTask,
	editTasksStatus,
	editTasksImportance,
	data,
	data: {
		_id,
		title,
		createdAt,
		user: { userName },
		description,
		status,
		importance,
	},
}) => {
	const dateTime = new Date(createdAt).toLocaleString() + "hs.";
	const [showMore, setShowMore] = useState(false);

	const reduceString = (str) => {
		return str.length > 100
			? { string: str.slice(0, 97).concat("..."), addButton: true }
			: { string: str, addButton: false };
	};

	return (
		<div id='card' className={`card card--${importance}--${status}`}>
			{status === "FINISHED" && (
				<button
					className='card--delete'
					onClick={() => deleteTask(_id)}
				>
					<AiOutlineClose />
				</button>
			)}
			<div className='card--title'>{title}</div>
			<label className='card--label'>Fecha</label>
			<div className='card--time'>{dateTime}</div>
			<label className='card--label'>Creada por</label>
			<div className='card--user'>{userName}</div>
			<label className='card--label'>Estado </label>
			<button
				className={`card--button ${status}`}
				type='button'
				onClick={() => editTasksStatus(data)}
			>
				{status}
			</button>
			<label className='card--label'>Importancia </label>

			<button
				className={`card--button ${importance}`}
				type='button'
				onClick={() => editTasksImportance(data)}
			>
				{importance}
			</button>
			<label className='card--label'>Mensaje </label>

			<p className='card--description'>
				{!showMore ? reduceString(description).string : description}
			</p>
			{reduceString(description).addButton && (
				<button
					className='card--button'
					onClick={() => setShowMore(!showMore)}
				>
					{!showMore ? "Ver Mas" : "Ver Menos"}
				</button>
			)}
		</div>
	);
};
