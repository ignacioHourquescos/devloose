import { Styled } from "./styles.js";

const Card = ({ title, image, description, stack }) => {
	return (
		<Styled.Inner>
			<Styled.DetailedContainer>
				<Styled.Description>
					{" "}
					<Styled.Title>{title}</Styled.Title>
					{description}
				</Styled.Description>
				<Styled.Image src={image}></Styled.Image>
			</Styled.DetailedContainer>
		</Styled.Inner>
	);
};

export default Card;
