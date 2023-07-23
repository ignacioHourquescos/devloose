import React from "react";
import { Styled } from "./styles.js";
import Image from "next/image";

const Profile = () => {
	return (
		<Styled.Inner>
			{us?.map((element, idx) => (
				<Styled.Profile key={idx}>
					<Styled.Doodle
						width="100%"
						height="100%"
						src={element.doodle}
					></Styled.Doodle>
					<Styled.Name>{element.name}</Styled.Name>
					<Styled.Description>{element.description}</Styled.Description>
				</Styled.Profile>
			))}
		</Styled.Inner>
	);
};

export default Profile;

const us = [
	{
		name: "Ignacio Tata",
		doodle: "/tata.png",
		description: "Developer",
	},
	{
		name: "Ignacio Hourquescos",
		doodle: "/orki.png",
		description: "Designer",
	},
	{
		name: "Marina Guseva",
		doodle: "/mari.png",
		description: "Developer",
	},
	{
		name: "Carlos Fernandez",
		doodle: "/charly.png",
		description: "Developer",
	},
	{
		name: "Agustin Cordoba",
		doodle: "/agus.png",
		description: "Developer",
	},
	{
		name: "Damian Basarena",
		doodle: "/dami.png",
		description: "Developer",
	},
	{
		name: "Alejo Digiovine",
		doodle: "/alejo.png",
		description: "Designer",
	},
	{
		name: "Fernando Touza",
		doodle: "/alejo.png",
		description: "Designer",
	},
];
