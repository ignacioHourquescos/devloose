import styled, { keyframes, css } from "styled-components";
import UTILS from "../../../utils/utils";

export const Styled = {
	Logo: styled.div``,
	Inner: styled.div`
		/* background-image: url("/propulz/footer.png"); */
		position: fixed;
		top: 0;
		display: flex;
		justify-content: center;
		width: 100%;
		padding: 0 15%;
		color: white;
		z-index: 1000;
		box-sizing: border-box;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 100%;
			margin: 0% 0%;
			padding: 0%;
		}
	`,
	NavBarItem: styled.span.attrs((props) => ({
		type: "text",
		isActive: props.active,
	}))`
		box-sizing: content-box;
		margin: 0 2.5%;
		font-weight: 300;
		font-size: 1rem;
		padding: 2%;
		text-decoration: ${(props) => (props.active ? "underline" : "none")};
		text-decoration-color: ${(props) =>
			props.active ? UTILS.COLORS.GREEN : "white"};
		text-decoration-thickness: 5px;
		text-decoration-skip-ink: none;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 100%;
			margin: 0% 0%;
			padding: 4% 2%;
			font-size: 0.8rem;
			text-align: center;
		}
		:hover {
			cursor: pointer;
		}
	`,
};
