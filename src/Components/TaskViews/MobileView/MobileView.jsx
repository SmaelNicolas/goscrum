import React, { useState } from "react";

export const MobileView = ({ renderCardsByType }) => {
	const [showNew, setShowNew] = useState(true);
	const [showProgress, setShowProgress] = useState(true);
	const [showFinished, setShowFinished] = useState(true);

	return (
		<section className='big--container'>
			<div className='task--card--container'>
				<div
					className='title--progress'
					onClick={() => setShowNew(!showNew)}
				>
					<div className='title--progress--text'>Nuevas</div>
					{showNew && <div>🔽</div>}
					{!showNew && <div>🔼</div>}
				</div>
				{showNew && renderCardsByType("NEW")}
			</div>
			<div className='task--card--container'>
				<div
					className='title--progress'
					onClick={() => setShowProgress(!showProgress)}
				>
					<div className='title--progress--text'>En Progreso</div>
					{showProgress && <div>🔽</div>}
					{!showProgress && <div>🔼</div>}
				</div>
				{showProgress && renderCardsByType("IN PROGRESS")}
			</div>
			<div className='task--card--container'>
				<div
					className='title--progress'
					onClick={() => setShowFinished(!showFinished)}
				>
					<div className='title--progress--text'>Finalizadas</div>
					{showFinished && <div>🔽</div>}
					{!showFinished && <div>🔼</div>}
				</div>
				{showFinished && renderCardsByType("FINISHED")}
			</div>
		</section>
	);
};
