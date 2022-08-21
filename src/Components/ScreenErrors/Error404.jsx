import { Link } from "react-router-dom";

export default function Error404() {
	return (
		<div className='error--404'>
			<div className='error404--container'>
				<div className='error404--text'>
					La página a la que intenta acceder no existe
				</div>
				<Link to='/login' className='link--error404'>
					Iniciar Sesion
				</Link>
			</div>
		</div>
	);
}
