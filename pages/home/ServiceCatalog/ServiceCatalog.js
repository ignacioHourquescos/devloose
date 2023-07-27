import React from "react";
import { Styled } from "./styles.js";
import CardService from "./CardService/CardService.js";
import SectionTitle from "../../../components/common/SectionTitle/SectionTitle.js";

const ServiceCatalog = (props) => {
	return (
		<Styled.Inner>
			<SectionTitle>Catalogo de Servicios</SectionTitle>
			<Styled.CardContainer>
				{services.map((element, idx) => (
					<>
						<CardService
							key={idx}
							title={element.title}
							description={element.description}
							doodle={element.doodle}
							slug={element.slug}
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
			"Creamos aplicaciones web y móviles a medida para potenciar tu negocio o desarrollar tu idea y brindar una experiencia única a tus usuarios.",
	},
	{
		title: "Prototipado Rápido",
		slug: "blog/prototyping",
		description:
			"Con nuestro enfoque de prototipado rápido, transformamos ideas en soluciones tangibles en poco tiempo, dando lugar a la validación de conceptos.",
	},
	{
		title: "Lanzamiento de MVP",
		slug: "blog/mvp",
		description:
			"Ayudamos a lanzar tu Producto Mínimo Viable (MVP) al mercado de manera ágil y eficiente, permitiendo tener una retroalimentación temprana y reducir riesgos.",
	},
];
