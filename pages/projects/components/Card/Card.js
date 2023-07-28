import { useState } from "react";
import { Styled } from "./styles.js";
import { BiLogoReact } from "react-icons/bi";
import Link from "next/link.js";

const Card = ({
	title,
	image,
	description,
	stack,
	children,
	client,
	link,
	video,
}) => {
	const [showVideo, setShowVideo] = useState(false);
	return (
		<Styled.Inner>
			<Styled.DetailedContainer>
				<Styled.Content>
					<Styled.Title>{title}</Styled.Title>
					<Styled.SubTitle>{client}</Styled.SubTitle>
					<Styled.Description>{description}</Styled.Description>
					<Styled.TechStack>
						<BiLogoReact size={35} />
					</Styled.TechStack>
					<Styled.VisitButton
						onClick={() => {
							setShowVideo(true);
						}}
					>
						Ver
					</Styled.VisitButton>
					{link != null ? (
						<Styled.VisitButton>
							<Link href={link}>Visitar &rarr;</Link>
						</Styled.VisitButton>
					) : (
						""
					)}
				</Styled.Content>
				<Styled.Image src={image}></Styled.Image>
			</Styled.DetailedContainer>
			{showVideo ? (
				<Styled.Video>
					<video width="60%" height="60%" controls autoplay>
						<source src={`${video}`} type="video/mp4" />
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
