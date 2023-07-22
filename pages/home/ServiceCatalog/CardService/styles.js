import styled from "styled-components";
import UTILS from "../../../../utils/utils";

export const StyledCard = {
	Inner: styled.div`
		border: ${UTILS.DRAFT};
		width: 30%;
		margin: 2%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		align-content: center;
		justify-items: center;
		justify-content: flex-start;
		background: rgba(0, 0, 0, 0.05);
		border-left: 8px solid rgba(0, 0, 0, 0.3);
		/* background: rgb(249, 249, 249);
		background: linear-gradient(
			90deg,
			rgba(249, 249, 249, 1) 0%,
			rgba(255, 255, 255, 1) 100%,
			rgba(255, 255, 255, 1) 100%
		);
		border-radius: 0.5rem;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19); */

		@media ${UTILS.SCREEN.MOBILE} {
			width: 80%;
			padding: 5% 5%;
			margin: 10%;
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
		margin: 10% 0;
		padding: 0 8%;
	`,
	Description: styled.div`
		border: ${UTILS.DRAFT};
		font-size: 1rem;
		margin-bottom: 2rem;
		padding: 0 8%;
		min-height: 40%;
	`,
	Button: styled.button`
		background-color: black;
		padding: 0.5rem 1rem;
		color: white;
		border-radius: 4rem;
		margin-left: 8%;
		margin-bottom: 4rem;
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
