import React from "react";
import { Styled } from "./styles";
import Capabilities from "./components/Capabilities";
import SubHeader from "../../components/common/sub-header/SubHeader";

const Services = (props) => {
	return (
		<Styled.Inner>
			<SubHeader
				title="Conocenos"
				subtitle="Quienes somos, tencologias y metodologias utilizadas"
			></SubHeader>
			<Capabilities />
		</Styled.Inner>
	);
};

export default Services;
