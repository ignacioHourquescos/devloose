import React from "react";
import { Styled } from "./styles.js";
import CardService from "./CardService/CardService.js";
import SectionTitle from "../../../components/common/SectionTitle/SectionTitle.js";

const ServiceCatalog = (props) => {
	return (
		<Styled.Inner>
			<Styled.CardContainer>
				{services.map((element, idx) => (
					<>
						<CardService
							key={idx}
							title={element.title}
							description={element.description}
							doodle={element.doodle}
							slug={element.slug}
							bullet={element.bullets}
							icon={element.icon}
						></CardService>
					</>
				))}
			</Styled.CardContainer>
		</Styled.Inner>
	);
};

export default ServiceCatalog;

const services = [
	{
		title: "Desarrollo web y móvil",
		slug: "blog/webapp",
		description:
			" Impulsamos tu negocio / proyecto, con aplicaciones web y móviles a medida, con foco en el usuario",
		bullets: [
			"Entregas Iterativas & mejora continua",
			"Diseño centrado en el usuario",
			"Arquitectura escalable",
		],
		icon: "propulz/icon1.png",
	},
	{
		title: "Prototipado Rápido",
		slug: "blog/prototyping",
		description:
			"Iterando prototipos ágilmente, transformamos ideas en soluciones tangibles y validamos conceptos.",
		bullets: [
			"Mockups conceptuales",
			"Validación de flujos",
			"Prototipos navegables",
		],
		icon: "propulz/icon2.png",
	},
	{
		title: "Lanzamiento de MVP",
		slug: "blog/mvp",
		description:
			"Lanzamos ágilmente tu MVP para obtener retroalimentación valiosa en etapas tempranas de desarrollo",
		bullets: [
			"Identificación del caso de negocio",
			"Definción propuesta de valor",
			"Diseño de Roadmap",
		],
		icon: "propulz/icon3.png",
	},
];
