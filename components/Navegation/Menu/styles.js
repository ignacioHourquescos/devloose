import styled, { keyframes, css } from "styled-components";
import UTILS from "../../../utils/utils";

export const Styled = {
	Inner: styled.div`
		position: fixed;
		top: 0;
		display: flex;
		justify-content: center;
		width: 100%;
		padding: 0 15%;
		background-color: ${UTILS.COLORS.BLACK};
		color: white;
		z-index: 1000;
		box-sizing: border-box;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 100%;
			margin: 0% 0%;
			padding: 0%;
		}
		animation: ${(props) => (props.out ? fadeOut : fadeIn)} 3s ease-in;
		transition: visibility 3s ease-in;
	`,
	MenuItem: styled.span.attrs((props) => ({
		type: "text",
		isActive: props.active,
	}))`
    box-sizing: content-box;
		margin: 0 2.5%;
		font-weight: 400;
		font-size: 1.2rem;
		padding: 2%;
    ${"" /* border:4px solid; */}
    text-decoration:  ${(props) => (props.active ? "underline" : "none")}} 8px;
		text-decoration-color: ${(props) =>
			props.active ? UTILS.COLORS.GREEN : "white"}};
      text-decoration-thickness: 5px;
      text-decoration-skip-ink: none;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 100%;
			margin: 0% 0%;
			padding: 4% 2%;
			font-size: 0.8rem;
      text-align:center;
		}
    :hover{
      cursor: pointer;
    }

	`,
};

const fadeIn = keyframes`
  from {

    opacity: 0;
  }

  to {

    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {

    opacity: 0;
  }

  to {
 
    opacity: 1;
  }
`;
