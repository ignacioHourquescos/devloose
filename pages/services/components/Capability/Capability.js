import React from "react";
import { StyledCard } from "./styles.js";
import { Collapse } from "antd";
import { Styled } from "./styles.js";
const { Panel } = Collapse;

const Capability = ({ title, capabilityList }) => {
	return (
		<Styled.Inner>
			<Collapse
				// defaultActiveKey={["1"]}
				ghost
				// expandIcon={({ isActive }) => (isActive ? "<" : "-")}
			>
				<Panel
					style={{ width: "100%" }}
					header={<div style={{ width: "100%" }}>{title}</div>}
					key="1"
				>
					{capabilityList.map((element, idx) => (
						<Styled.CapabilityContainer key={idx}>
							<Styled.Title>{element.title}</Styled.Title>
							<Styled.Description>{element.description}</Styled.Description>
						</Styled.CapabilityContainer>
					))}
				</Panel>
			</Collapse>
		</Styled.Inner>
	);
};

export default Capability;
