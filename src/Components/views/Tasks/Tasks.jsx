import { useEffect, useState } from "react";
import { useResize } from "../../../Hooks/useResize";
import { Card } from "../../Card/Card";
import { Header } from "../../Header/Header";
import { TaskForm } from "../../TaskForm/TaskForm";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

export const Tasks = () => {
	const [list, setList] = useState([]);
	const { isMobile } = useResize();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`${API_ENDPOINT}task`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + localStorage.getItem("token"),
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setList(data.result);
				setTimeout(() => {
					setLoading(false);
				}, 5000);
			});
	}, []);

	const renderAllCards = () => {
		return list?.map((data) => <Card key={data._id} data={data} />);
	};
	const renderCardsByType = (value) => {
		return list
			?.filter((card) => card.status === value)
			.map((data) => <Card key={data._id} data={data} />);
	};

	return (
		<div>
			<Header />
			<TaskForm />
			<main id='tasks'>
				{/* wrapperlist */}
				{!list.length ? (
					<div>No existen tareas creadas</div>
				) : loading ? (
					<Skeleton />
				) : isMobile ? (
					<section>
						<div id='list cards'>
							<h4>EN TELEFONO</h4>
							{renderAllCards()}
						</div>
					</section>
				) : (
					<section>
						<h2>DESKTOP</h2>
						<div>
							<h4>Nuevas</h4>
							{renderCardsByType("NEW")}
						</div>
						<div>
							<h4>En Progreso</h4>
							{renderCardsByType("IN PROGRESS")}
						</div>
						<div>
							<h4>Finalizadas</h4>
							{renderCardsByType("FINISHED")}
						</div>
					</section>
				)}
			</main>
		</div>
	);
};
