import { Link } from "react-router-dom";

export default function Error404() {
	return (
		<div className='error--404'>
			<div className='error404--text'>😔</div>
			<div className='error404--text'>OOPS!</div>
			<div className='error404--text'>La pagina no existe</div>
			<Link to='/login' className='link--othersection'>
				Iniciar Sesion
			</Link>
		</div>
	);
}
