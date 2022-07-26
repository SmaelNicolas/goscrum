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
							<Card fnReduce={reduceString} />
						</div>
					</section>
				) : (
					<section>
						<h2>Mis Tareas</h2>
						<div id='list cards'>
							<h4>Nuevas</h4>
							<Card fnReduce={reduceString} />
						</div>
						<div id='list cards'>
							<h4>En Proceso</h4>
							<Card fnReduce={reduceString} />
						</div>
						<div id='list cards'>
							<h4>Terminadas</h4>
							<Card fnReduce={reduceString} />
						</div>
					</section>
				)}
			</main>
		</div>
	);
};
