import React from "react";
import { Styled } from "./styles.js";
import CardService from "./Capability/Capability.js";
import Capability from "./Capability/Capability.js";

const Capabilities = (props) => {
	return (
		<Styled.Inner>
      
			<Styled.BlockTitle>Capacidades</Styled.BlockTitle>
			<Capability title="Desarrollo" capabilityList={developmentCapabilities} />
			<Capability title="Diseño" capabilityList={designCapabilities} />
			<Capability title="Producto" capabilityList={productCapabilities} />

			<Styled.BlockTitle>Technologies</Styled.BlockTitle>
			<Capability title="Stack Tecnologico" capabilityList={techStack} />
		</Styled.Inner>
	);
};

export default Capabilities;

const designCapabilities = [
	{
		title: "Sprint de diseño",
		description:
			"Acorta el tiempo de diseño del producto con un enfoque colaborativo y con límite de tiempo. Ideación, prototipado y validación de ideas en tan solo unos días para una innovación rápida.",
	},
	{
		title: "Interfaz de usuario (UI)",
		description:
			"Creación de interfaces intuitivas y visualmente atractivas que mejoran la participación del usuario y generan experiencias positivas.",
	},
	{
		title: "Diseño centrado en el usuario",
		description:
			"Un enfoque que prioriza las necesidades del usuario, la investigación, la iteración y las pruebas para obtener experiencias de producto excepcionales.",
	},
	{
		title: "Experiencia del usuario (UX)",
		description:
			"Crea interacciones sin problemas y experiencias atractivas. Investigación, diseño y pruebas para crear productos que deleiten a los usuarios y conduzcan al éxito del negocio.",
	},
];

const productCapabilities = [
	{
		title: "Hoja de ruta del producto",
		description:
			"Descubrimiento inmersivo, creación de resúmenes, priorización de funcionalidades, diseño del Producto Mínimo Viable (MVP). Soluciones alineadas con las necesidades del negocio y del cliente para obtener resultados impactantes.",
	},
	{
		title: "Mapeo de historias",
		description:
			"Organización y priorización visual de historias de usuario, alineándolas con los objetivos comerciales y las necesidades del usuario. Simplifique el desarrollo de su producto con nuestra asistencia experta.",
	},
	{
		title: "Descubrimiento de productos",
		description:
			"Un proceso integral para descubrir las necesidades del negocio y del usuario, priorizar funcionalidades y diseñar un Producto Mínimo Viable (MVP) estratégico para un desarrollo de producto exitoso.",
	},
	{
		title: "Investigación de usuarios",
		description:
			"Metodologías para recopilar conocimientos y comentarios de los usuarios objetivos, que informan las decisiones de desarrollo del producto y mejoran la experiencia del usuario.",
	},
];

const developmentCapabilities = [
	{
		title: "Desarrollo móvil/web",
		description:
			"Nuestro servicio de desarrollo de aplicaciones móviles y PWA crea aplicaciones nativas y basadas en la web. Utilizando pilas tecnológicas populares para experiencias fluidas en múltiples plataformas.",
	},
	{
		title: "Extracción de datos (Web Scraping)",
		description:
			"Nuestro servicio de extracción de datos de sitios web obtiene datos valiosos de páginas web. Soluciones personalizadas que utilizan técnicas avanzadas para la recopilación y análisis de datos con el fin de obtener información y facilitar la toma de decisiones.",
	},
];

const techStack = [
	{
		title: "Desarrollo de Front-end",
		description:
			"HTML/CSS, JavaScript, React.js, Next.js, Vue.js, Ember.js, Backbone.js, Bootstrap, Material-UI, Foundation, Sass, Less, Redux, GraphQL y Webpack.",
	},
	{
		title: "Desarrollo de Back-end",
		description:
			"Node.js, Express.js, Django, Flask, Ruby on Rails, ASP.NET, Laravel y Spring.",
	},
	{
		title: "Diseño",
		description:
			"Figma, Sketch, InVision Studio, Canva, Zeplin, SketchUp, Marvel.",
	},
];
