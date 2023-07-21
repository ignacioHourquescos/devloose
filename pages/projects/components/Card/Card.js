import { Styled } from "./styles.js";
import { BiLogoReact } from "react-icons/bi";

const Card = ({ title, image, description, stack, children }) => {
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
				</Styled.Content>
				<Styled.Image src={image}></Styled.Image>
			</Styled.DetailedContainer>
		</Styled.Inner>
	);
};

export default Card;
