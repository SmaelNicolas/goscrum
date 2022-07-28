const reduceString = (str) => {
	return str.length > 300
		? { string: str.slice(0, 297).concat("..."), addButton: true }
		: { string: str, addButton: false };
};

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
	return (
		<div id='card'>
			<div>X</div>
			<h3>{title}</h3>
			<h6>{createdAt}</h6>
			<h5>{userName}</h5>
			<button type='button'> {status}</button>
			<button type='button'> {importance}</button>
			<p>{reduceString(description).string}</p>
		</div>
	);
};
