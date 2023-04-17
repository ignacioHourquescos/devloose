import { Styled } from "./styles.js";

const Card = ({ title, image, description, stack }) => {
	return (
		<Styled.Inner>
			<Styled.Title>{title}</Styled.Title>
			<Styled.DetailedContainer>
				<Styled.Description>{description}</Styled.Description>
				<Styled.Image src={image}></Styled.Image>
			</Styled.DetailedContainer>
		</Styled.Inner>
	);
};

export default Card;
