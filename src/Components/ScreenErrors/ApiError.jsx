import { Link } from "react-router-dom";
import "./screenErrors.css";

export const ApiError = () => {
	return (
		<div className='error--404'>
			<div className='error404--container'>
				<div className='error404--text'>Hubo un error en la acción</div>
				<Link to='/login' className='link--error404'>
					Prueba mas tarde
				</Link>
			</div>
		</div>
	);
};
