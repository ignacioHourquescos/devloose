import styled from "styled-components";
import UTILS from "../../../utils/utils";

export const StyledCard = {
	Inner: styled.div`
		border: ${UTILS.DRAFT};
		width: 33%;
		padding: 0 2.5%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		align-content: center;
		justify-items: center;
		justify-content: flex-start;

		@media ${UTILS.SCREEN.MOBILE} {
			width: 100%;
			padding: 5% 10%;
		}
	`,
	ServiceNumber: styled.div`
		color: grey;
		opacity: 0.5;
		font-size: 1.5rem;
		font-weight: bold;
	`,
	Title: styled.div`
		border: ${UTILS.DRAFT};
		font-size: 1.5rem;
		font-weight: bold;
		margin: 5% 0;
	`,
	Description: styled.div`
		border: ${UTILS.DRAFT};
		font-size: 1rem;
		margin-bottom: 2rem;
	`,
	Doodle: styled.img.attrs((props) => ({
		type: "text",
		image: props.image,
	}))`
		${"" /* clip-path: polygon(10% 0, 89% 0, 100% 100%, 0% 100%); */}
		${
			"" /* background-image: url(${(props) => props.image});
		background-size: contain;
    background */
		}
		border-radius: 5px;
		width: 40%;
		${"" /* height: 100%; */}
	`,
};
