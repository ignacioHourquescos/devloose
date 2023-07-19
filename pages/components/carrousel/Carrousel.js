import React from "react";
import { Styled } from "./styles";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";

const Carrousel = (props) => {
	return (
		<Styled.Inner>
			<ImageList cols={3} rowHeight={300} style={{ overflow: "hidden" }}>
				{itemData.map((item) => (
					<ImageListItem key={item.img} style={{ overflow: "hidden" }}>
						<img
							src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
							srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
							alt={item.title}
							loading="lazy"
						/>
						<ImageListItemBar
							title={item.title}
							subtitle={item.author}
							actionIcon={
								<IconButton
									sx={{ color: "rgba(255, 255, 255, 0.54)" }}
									aria-label={`info about ${item.title}`}
								>
									+
								</IconButton>
							}
						/>
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
