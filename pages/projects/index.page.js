import React from "react";
import { Styled } from "./styles";
import OurWork from "./components/OurWork";
import SubHeader from "../../components/common/sub-header/SubHeader";

const Projects = (props) => {
	return (
		<Styled.Inner>
			<SubHeader
				title="Proyectos realizados"
				subtitle="Conoce algunos de nuestros trabajos realizados"
			></SubHeader>
			<OurWork />
		</Styled.Inner>
	);
};

export default Projects;
