import React from "react";
import { Styled } from "./styles";
import Capabilities from "./components/Capabilities";
import SubHeader from "../../components/common/sub-header/SubHeader";
import Profile from "./components/Profile/Profile";

const Services = (props) => {
	return (
		<Styled.Inner>
			<SubHeader
				title="Conocenos"
				subtitle="Quienes somos, tecnologías y metodologías utilizadas"
			></SubHeader>
			<Profile />
			<Capabilities />
		</Styled.Inner>
	);
};

export default Services;
