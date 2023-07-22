import { useState } from "react";
import { Styled } from "./styles.js";
import { BiLogoReact } from "react-icons/bi";

const Card = ({ title, image, description, stack, children }) => {
	const [showVideo, setShowVideo] = useState(false);
	return (
		<Styled.Inner>
			<Styled.DetailedContainer>
				<Styled.Content>
					<Styled.Title>{title}</Styled.Title>
					<Styled.SubTitle>{title}</Styled.SubTitle>
					<Styled.Description>{description}</Styled.Description>
					<Styled.TechStack>
						<BiLogoReact size={35} />
					</Styled.TechStack>
					<Styled.VisitButton>Visitar</Styled.VisitButton>
					<Styled.VisitButton
						onClick={() => {
							setShowVideo(true);
						}}
					>
						Ver
					</Styled.VisitButton>
				</Styled.Content>
				<Styled.Image src={image}></Styled.Image>
			</Styled.DetailedContainer>
			{showVideo ? (
				<Styled.Video>
					{" "}
					<video width="60%" height="60%" controls>
						<source
							src="https://www.youtube.com/watch?v=L5VkdSx3h8A"
							type="video/mp4"
						/>
					</video>
					<Styled.GoBackButton
						onClick={() => {
							setShowVideo(false);
						}}
					>
						Volver
					</Styled.GoBackButton>
				</Styled.Video>
			) : (
				""
			)}
		</Styled.Inner>
	);
};

export default Card;
