import React, { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

export const MobileView = ({ renderCardsByType, checkList }) => {
	const [showNew, setShowNew] = useState(true);
	const [showProgress, setShowProgress] = useState(true);
	const [showFinished, setShowFinished] = useState(true);

	return (
		<section className='tasks--cards--container'>
			<div className='task--card--types'>
				<div
					className='title--progress'
					onClick={() => setShowNew(!showNew)}
				>
					<div className='title--progress--text'>
						{showNew && <AiOutlineArrowDown />}
						{!showNew && <AiOutlineArrowUp />}
						Nuevas
					</div>
				</div>
				{showNew &&
					(checkList("NEW")
						? renderCardsByType("NEW")
						: "No Existen Tareas!")}
			</div>
			<div className='task--card--types'>
				<div
					className='title--progress'
					onClick={() => setShowProgress(!showProgress)}
				>
					<div className='title--progress--text'>
						{showProgress && <AiOutlineArrowDown />}
						{!showProgress && <AiOutlineArrowUp />}
						En Progreso
					</div>
				</div>
				{showProgress &&
					(checkList("IN PROGRESS")
						? renderCardsByType("IN PROGRESS")
						: "No Existen Tareas!")}
			</div>
			<div className='task--card--types'>
				<div
					className='title--progress'
					onClick={() => setShowFinished(!showFinished)}
				>
					<div className='title--progress--text'>
						{showFinished && <AiOutlineArrowDown />}
						{!showFinished && <AiOutlineArrowUp />}
						Finalizadas
					</div>
				</div>
				{showFinished && renderCardsByType("FINISHED")}
				{showFinished &&
					(checkList("FINISHED")
						? renderCardsByType("FINISHED")
						: "No Existen Tareas!")}
			</div>
		</section>
	);
};
