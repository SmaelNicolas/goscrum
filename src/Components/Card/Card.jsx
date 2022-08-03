import { useState } from "react";
import "./card.css";

export const Card = ({
	deleteTask,
	editTasksStatus,
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
		return str.length > 110
			? { string: str.slice(0, 107).concat("..."), addButton: true }
			: { string: str, addButton: false };
	};

	return (
		<div id='card' className={`card card--${importance}--${status}`}>
			<div className='card--delete' onClick={() => deleteTask(_id)}>
				X
			</div>
			<h3 className='card--title'>{title}</h3>
			<div className='card--time'>{dateTime}</div>
			<div className='card--user'>{userName}</div>
			<button
				className={`card--button ${status}`}
				type='button'
				onClick={() => editTasksStatus(data)}
			>
				{status}
			</button>
			<button className={`card--button ${importance}`} type='button'>
				{importance}
			</button>
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
