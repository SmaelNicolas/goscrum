import React from "react";
import { CgSandClock } from "react-icons/cg";

export const LoadingContent = () => {
	return (
		<div className='fallback--container'>
			<div>
				<CgSandClock /> Cargando Contenido
			</div>
		</div>
	);
};
