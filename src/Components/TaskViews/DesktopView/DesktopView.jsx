import React from "react";

export const DesktopView = ({ renderCardsByType, checkList }) => {
	return (
		<section className='cards--container--desktop'>
			<div className='cards--container--progress'>
				<h2 className='title--progress'>Nuevas</h2>
				{checkList("NEW") ? renderCardsByType("NEW") : "NO HAY TAREAS!"}
			</div>
			<div className='cards--container--progress'>
				<h2 className='title--progress'>En Progreso</h2>
				{checkList("IN PROGRESS")
					? renderCardsByType("IN PROGRESS")
					: "NO HAY TAREAS!"}
			</div>
			<div className='cards--container--progress'>
				<h2 className='title--progress'>Finalizadas</h2>
				{checkList("FINISHED")
					? renderCardsByType("FINISHED")
					: "NO HAY TAREAS!"}
			</div>
		</section>
	);
};
