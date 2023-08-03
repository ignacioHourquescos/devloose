import React from "react";
import { Styled } from "./styles";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import { isMobile } from "react-device-detect";
import { useState } from "react";
import { useEffect } from "react";

const Carrousel = (props) => {
	const [columns, setColumns] = useState(2);
	useEffect(() => {
		if (isMobile) {
			setColumns(1);
		} else {
			setColumns(3);
		}
	}, []);
	return (
		<Styled.Inner>
			<ImageList cols={columns} rowHeight={300} style={{ overflow: "hidden" }}>
				{itemData.map((item) => (
					<ImageListItem key={item.img} style={{ overflow: "hidden" }}>
						<img
							src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
							srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
							alt={item.title}
							loading="lazy"
						/>
						<ImageListItemBar sx={{ height: "100%" }} subtitle={item.author} />
					</ImageListItem>
				))}
			</ImageList>
		</Styled.Inner>
	);
};

export default Carrousel;

const itemData = [
	{
		img: "/portfolio1.png",
		title: "Breakfast",
	},
	{
		img: "/portfolio2.png",
		title: "Burger",
	},
	{
		img: "/portfolio3.png",
		title: "Camera",
	},
];
