import React from "react";
import { Styled } from "./styles";
import SectionTitle from "../../components/common/SectionTitle/SectionTitle";
import { useRouter } from "next/router";
import Link from "next/link";

const BlogItem = (props) => {
	const router = useRouter();
	const blogItem = router.query.slug;
	return (
		<Styled.Inner>
			{BlogItemsArray.filter((element) => element.id == blogItem).map(
				(element, idx) => (
					<>
						<Styled.ImageContainer>
							<Styled.Image src={element.image}></Styled.Image>
						</Styled.ImageContainer>
						<Styled.Title>{element.title}</Styled.Title>
						<Styled.Content>{element.content}</Styled.Content>
					</>
				)
			)}
			<Styled.ContactButton>
				<Link href="/contact">¿Suena interesante? Hablemos! </Link>
			</Styled.ContactButton>
		</Styled.Inner>
	);
};

export default BlogItem;

const BlogItemsArray = [
	{
		id: "mvp",
		title: "Construyendo un MVP",
		image: "/mvp.png",
		content: (
			<>
				El desarrollo de un Producto Mínimo Viable MVP es esencial para startups
				y proyectos empresariales emergentes. Un MVP es una versión básica que
				se lanza al mercado para validar ideas y recolectar retroalimentación de
				usuarios. Permite ahorrar tiempo y recursos al enfocarse en lo esencial,
				validando si la idea es viable y tiene demanda real. <br />
				<br />
				Además de ser funcional, el MVP debe ser confiable, usable y tener
				diseño empático. La confiabilidad asegura un funcionamiento estable y
				genera confianza. La usabilidad enfoca en la experiencia del usuario, y
				el diseño empático conecta emocionalmente con ellos, resolviendo sus
				problemas y obteniendo valiosos comentarios. <br />
				<br />
				La iteración es clave en el desarrollo del MVP. Al lanzarlo al mercado,
				se obtiene retroalimentación para mejorar el producto. La dinámica de
				mejora constante, basada en la retroalimentación de usuarios, hace del
				MVP una poderosa herramienta en el proceso de desarrollo de productos
				exitosos. <br />
				<br />
				El MVP es la versión más simple de un producto, basado en la filosofía
				de manufactura enxuta de Japón y popularizado en el Vale do Silício por
				el movimiento Lean Startup. Al entregar una fatia fina del producto, se
				validan hipótesis con una versión factible y sorprendente que motiva a
				los usuarios a querer más. En resumen, el MVP es la base para construir
				productos exitosos, centrándose en lo esencial y evolucionando con el
				feedback del mercado y los usuarios. <br />
			</>
		),
	},
	{
		id: "webapp",
		title: "Del Caos a la Claridad",
		image: "/CaosToClarity.png",
		content: (
			<>
				El diseño y desarrollo de aplicaciones web y móviles es un apasionante
				viaje que comienza con una simple idea y se transforma en un exitoso
				producto de software. Este emocionante proceso atraviesa diversas
				etapas, desde el caos y la confusión inicial hasta el enfoque y la
				claridad que conducen al éxito. <br />
				<br />
				Todo comienza con la semilla de una idea, una chispa creativa que
				impulsa el proyecto. En esta etapa, el equipo puede encontrarse en medio
				de la nebulosa, sin una visión clara del camino a seguir. Es aquí donde
				surgen preguntas y desafíos, y el caos parece reinar. Sin embargo, a
				medida que se exploran diferentes enfoques y se discuten posibles
				soluciones, la visión comienza a tomar forma. <br />
				<br />
				Con el tiempo, el caos comienza a ceder y la confusión se disipa. El
				equipo empieza a enfocarse en la esencia de la idea, identificando los
				objetivos y las necesidades del usuario. A través de investigaciones,
				prototipos y pruebas, se acercan cada vez más a la solución ideal.
				<br />
				<br />
				La iteración es clave en este proceso. El equipo prueba, aprende y
				ajusta constantemente para mejorar el producto. A medida que avanzan, se
				deshacen de lo innecesario y se centran en lo esencial. Las piezas del
				rompecabezas empiezan a encajar, y el producto comienza a tomar forma.
				<br />
				<br />A medida que se refina el enfoque, la claridad emerge. Se tiene
				una visión clara del producto final y del camino a seguir. El equipo
				trabaja con un propósito común y una dirección clara. Cada decisión se
				toma de manera informada y estratégica, con el usuario en el centro de
				todo. <br />
				<br />
				Con cada iteración, el producto se vuelve más sólido y poderoso. La
				experiencia del usuario se optimiza, y el software se convierte en una
				herramienta valiosa que resuelve problemas y cumple con las expectativas
				del usuario. <br />
				<br />
				Finalmente, después de un arduo trabajo y dedicación, el producto o
				software llega al mercado con éxito. El equipo celebra los frutos de su
				esfuerzo y la satisfacción de haber superado los desafíos. Los usuarios
				se enamoran del producto, y este comienza a tener un impacto
				significativo en sus vidas. <br />
				<br />
				En resumen, el diseño y desarrollo de aplicaciones web y móviles es un
				viaje emocionante y desafiante. Desde la idea hasta el éxito, el equipo
				pasa por momentos de caos y confusión, pero con la iteración y el
				enfoque adecuado, llega a la claridad que da vida a un producto exitoso
				que marca la diferencia. <br />
				<br />
			</>
		),
	},
	{
		id: "prototyping",
		title: "Rapid prototyping",
		image: "/prototyping.jpg",
		content: (
			<>
				Design Thinking es una metodología creativa y centrada en el usuario que
				nos permite abordar problemas complejos y desarrollar soluciones
				innovadoras. A través de un enfoque iterativo, Design Thinking nos guía
				a lo largo de un proceso estructurado que fomenta la colaboración y la
				empatía con los usuarios. <br />
				<br />
				El viaje comienza con la inmersión en el mundo del usuario, entendiendo
				sus necesidades, deseos y desafíos. A través de entrevistas,
				observaciones y análisis, nos sumergimos en su experiencia para
				comprender a fondo su perspectiva. <br />
				<br />
				La definición del problema es una etapa crítica en el proceso de Design
				Thinking. Aquí, sintetizamos la información recopilada y formulamos una
				pregunta específica que guiará nuestro enfoque. Definir el problema de
				manera clara y precisa es esencial para encontrar soluciones efectivas.
				<br />
				<br />
				La generación de ideas es una fase creativa en la que buscamos
				respuestas innovadoras al problema. Utilizamos técnicas como el
				brainstorming y el pensamiento lateral para explorar una amplia gama de
				soluciones potenciales. En esta etapa, no hay ideas descartadas; cada
				aporte es valioso. <br />
				<br />
				Con una gran cantidad de ideas en la mano, pasamos a la etapa de
				prototipado. Aquí, creamos versiones tangibles y visuales de nuestras
				soluciones para ponerlas a prueba. Estos prototipos nos permiten obtener
				retroalimentación rápida y aprender de manera iterativa. <br />
				<br />
				La etapa de prueba y validación es fundamental para el proceso de Design
				Thinking. Compartimos nuestros prototipos con los usuarios y recopilamos
				sus comentarios. Observamos su interacción y reacción, lo que nos ayuda
				a identificar oportunidades de mejora. <br />
				<br />
				A medida que avanzamos en el proceso de Design Thinking, el caos inicial
				se transforma en claridad y enfoque. La metodología nos guía en cada
				paso, asegurando que mantengamos la mirada en el usuario y en el
				problema que buscamos resolver. <br />
				<br />
				La colaboración y la empatía son pilares clave en el proceso de Design
				Thinking. Trabajar en equipos multidisciplinarios nos permite aprovechar
				diferentes perspectivas y habilidades para generar soluciones más
				completas e innovadoras. <br />
				<br />
				Finalmente, a través del Design Thinking, logramos desarrollar
				soluciones que abordan las necesidades reales de los usuarios y
				resuelven problemas complejos. La metodología nos impulsa a pensar fuera
				de lo convencional, a desafiar el statu quo y a crear productos y
				servicios que tengan un impacto significativo en la vida de las
				personas. <br />
				<br />
				En resumen, Design Thinking es una poderosa metodología que nos guía a
				través de un proceso creativo y centrado en el usuario. Desde la
				inmersión en la experiencia del usuario hasta la creación de soluciones
				innovadoras, Design Thinking nos ayuda a transformar el caos en claridad
				y a desarrollar productos y servicios exitosos y significativos. <br />
				<br />
			</>
		),
	},
];
