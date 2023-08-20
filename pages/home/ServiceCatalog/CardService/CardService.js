import React from "react";
import { Styled } from "./styles.js";
import { Box } from "@mui/material";
import Link from "next/link.js";

const CardService = ({ title, description, icon, slug, bullet }) => {
	return (
		<Styled.Inner>
			<Styled.Logo>
				<img src={icon}></img>
			</Styled.Logo>
			<Styled.Title>{title.toUpperCase()}</Styled.Title>
			<Styled.Description>{description}</Styled.Description>
			<Styled.BulletContainer>
				{bullet.map((element, idx) => (
					<Styled.Bullet key={idx}>&raquo; {element}</Styled.Bullet>
				))}
			</Styled.BulletContainer>
			<Link href={slug}>
				<Styled.Button>Mas detalle</Styled.Button>
			</Link>
		</Styled.Inner>
	);
};

export default CardService;
