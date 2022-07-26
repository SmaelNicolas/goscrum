import { useResize } from "../../../Hooks/useResize";
import { Card } from "../../Card/Card";
import { Header } from "../../Header/Header";

export const Tasks = () => {
	const { isMobile } = useResize;

	const reduceString = (str) => {
		return str.length > 300
			? { string: str.slice(0, 297).concat("..."), addButton: true }
			: { string: str, addButton: false };
	};

	return (
		<div>
			<Header />
			<main id='tasks'>
				{/* wrapperlist */}
				{isMobile ? (
					<section>
						<div id='list cards'>
							<h4>EN TELEFONO</h4>
							<Card />
						</div>
					</section>
				) : (
					<section>
						<h2>Mis Tareas</h2>
						<div id='list cards'>
							<h4>Nuevas</h4>
							<div id='card'>
								<div>X</div>
								<h3>Tarea 1</h3>
								<h6>24/1/2022 16:40</h6>
								<h5>Nicolas Smael</h5>
								<button type='button'> Nueva</button>
								<button type='button'> Alta/media/baja</button>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Nobis officia, ipsa
									laboriosam explicabo exercitationem aliquam
									rerum blanditiis amet animi necessitatibus
									minima. Doloribus labore iste placeat!
								</p>
							</div>
						</div>
						<div id='list cards'>
							<h4>En Proceso</h4>
							<div id='card'>
								<div>X</div>
								<h3>Tarea 1</h3>
								<h6>24/1/2022 16:40</h6>
								<h5>Nicolas Smael</h5>
								<button type='button'> Nueva</button>
								<button type='button'> Alta/media/baja</button>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Nobis officia, ipsa
									laboriosam explicabo exercitationem aliquam
									rerum blanditiis amet animi necessitatibus
									minima. Doloribus labore iste placeat!
								</p>
							</div>
						</div>
						<div id='list cards'>
							<h4>Terminadas</h4>
							<div id='card'>
								<div>X</div>
								<h3>Tarea 1</h3>
								<h6>24/1/2022 16:40</h6>
								<h5>Nicolas Smael</h5>
								<button type='button'> Nueva</button>
								<button type='button'> Alta/media/baja</button>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Nobis officia, ipsa
									laboriosam explicabo exercitationem aliquam
									rerum blanditiis amet animi necessitatibus
									minima. Doloribus labore iste placeat!
								</p>
							</div>
						</div>
					</section>
				)}
			</main>
		</div>
	);
};
