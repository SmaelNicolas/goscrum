import { useState } from "react";

export const Card = ({
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
		return str.length > 150
			? { string: str.slice(0, 147).concat("..."), addButton: true }
			: { string: str, addButton: false };
	};

	return (
		<div id='card'>
			<div>X</div>
			<h3>{title}</h3>
			<h6>{dateTime}</h6>
			<h5>{userName}</h5>
			<button type='button'> {status}</button>
			<button type='button'> {importance}</button>
			<p style={{ width: "500px" }}>
				{!showMore ? reduceString(description).string : description}
			</p>
			<button onClick={() => setShowMore(!showMore)}>
				{!showMore ? "Ver Mas" : "Ver Menos"}
			</button>
		</div>
	);
};
