import { useResize } from "../../../Hooks/useResize";
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
							<div id='card'>
								<div>X</div>
								<h3>Tarea 1</h3>
								<h6>24/1/2022 16:40</h6>
								<h5>Nicolas Smael</h5>
								<button type='button'> Nueva</button>
								<button type='button'> Alta/media/baja</button>
								<p>
									{
										reduceString(
											"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quam architecto perspiciatis, et atque assumenda aliquid cum repudiandae hic possimus delectus illo expedita reiciendis ad voluptates, ea repellendus nostrum iusto fugiat iure necessitatibus beatae at. Maiores dignissimos voluptates quod quaerat, aliquid nobis eius, ex placeat voluptatum eveniet nemo molestiae quia consectetur excepturi modi assumenda quos architecto perferendis quidem vero cum qui pariatur. Repudiandae veniam facilis eius maiores perferendis voluptatum magnam harum, vero voluptate consectetur voluptates cupiditate maxime ab nam corrupti ad accusamus deserunt optio similique, consequatur odit in at. Odit autem ut sunt voluptate quo perspiciatis, ullam voluptas? Nulla, eum veritatis! Enim tempora minus, voluptates perferendis excepturi architecto nulla, eveniet modi quae, sed veritatis sunt odio ad velit libero adipisci maxime a! Praesentium harum natus odit tenetur, dignissimos tempora doloremque error necessitatibus earum magni itaque voluptates rem at alias, enim eius minima. Possimus, ut inventore nesciunt fuga perspiciatis, beatae, laboriosam rem dicta maxime officia veritatis? Sequi nihil neque nam cum, quidem nulla ullam minima ut debitis, doloribus at velit incidunt? Ut sunt atque animi, sequi sapiente dignissimos blanditiis dolores nihil impedit alias doloremque corporis repudiandae placeat, fugiat unde voluptatem nemo! Laborum rerum sed, amet sunt mollitia libero, voluptate porro fugiat necessitatibus minus vel dignissimos dolor, vitae omnis? Voluptates minima quae mollitia labore error incidunt! Blanditiis placeat voluptatem alias officiis maxime officia corporis, labore dolore quos quae, temporibus harum repellat iure nam cupiditate, minima hic ipsam similique nostrum delectus ex sit optio? Nemo, architecto. Error molestiae, quis aspernatur dolor hic veniam doloribus, numquam asperiores reiciendis odio sequi veritatis, alias tempora accusantium? Corporis illo harum, placeat eos laborum cupiditate est inventore vero possimus quod repellat aperiam ad, ipsam tempora? Atque voluptatibus blanditiis error hic consequatur minus aperiam quaerat soluta unde nam similique modi omnis, dignissimos, in cum voluptatem veniam ipsum! Error laudantium earum veniam nam facilis repellendus quibusdam molestias corporis rem alias. Quae voluptatibus aut minima iste dolore atque sequi. Saepe impedit libero fuga. Laborum, qui quidem nemo ab tempore expedita modi officia delectus vel accusamus? Architecto iusto eius aspernatur officiis totam dolorum neque, inventore quod quo, itaque atque perspiciatis eligendi provident, voluptatum perferendis doloremque ea. Quas, quo repellendus quam dicta, quis sed ad hic nobis excepturi in consequatur possimus at fugit expedita! Debitis voluptatum vero soluta nobis est dolor maxime repellat aliquid illo esse consequuntur, molestias ad quibusdam nisi amet, praesentium quisquam beatae asperiores aliquam atque! Suscipit quisquam dolores blanditiis optio?"
										).string
									}
								</p>
							</div>
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
