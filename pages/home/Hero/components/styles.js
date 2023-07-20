import styled, { keyframes, css } from "styled-components";
import UTILS from "../../../../utils/utils";

const bounce = keyframes`
0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);

  }
  40% {
    transform: translateY(-300px);
	opacity:0
  }
  60% {
    transform: translateY(-15px);
	opcity:1
  }
`;

export const Styled = {
	Inner: styled.div`
		display: flex;
		flex-direction: column;
		transform: translateY(-100px);
		align-items: center;
	`,
	Title: styled.div`
		font-size: 2.5rem;
		font-weight: 900;
		letter-spacing: 3px;
	`,
	Subtitle: styled.div`
		font-size: 1rem;
		font-weight: 50;
		letter-spacing: 1px;
	`,
	LogoContainer: styled.div`
		width: 100%;
	`,
	Name: styled.div`
		font-size: 2.9rem;
		font-weight: bold;
	`,
	Bounce: styled.div`
		color: #190d2a;
		margin-top: 3rem;
		-moz-animation: bounce 1s infinite;
		-webkit-animation: bounce 2s infinite;
		animation: ${bounce} 2s 12;
	`,
};
