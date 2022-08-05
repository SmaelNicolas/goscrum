import React from "react";

export const DesktopView = ({ renderCardsByType }) => {
	return (
		<section className='cards--container--desktop'>
			<div className='cards--container--progress'>
				<h2 className='title--progress'>Nuevas</h2>
				{renderCardsByType("NEW")}
			</div>
			<div className='cards--container--progress'>
				<h2 className='title--progress'>En Progreso</h2>
				{renderCardsByType("IN PROGRESS")}
			</div>
			<div className='cards--container--progress'>
				<h2 className='title--progress'>Finalizadas</h2>
				{renderCardsByType("FINISHED")}
			</div>
		</section>
	);
};
