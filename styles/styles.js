import styled from "styled-components";
import UTILS from "../utils/utils";

const Container = {
	Master: styled.div`
		border-left: 1px solid grey;
		border-right: 1px solid grey;
		&:hover {
			cursor: pointer;
		}
	`,
	CardService: styled.div`
		width: 80%;
		margin: 0 10%;
		display: flex;
		flex-wrap: wrap;
	`,
	Profile: styled.div`
		width: 80%;
		margin: 0 10%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		height: 100%;
		padding: 15%;
		@media ${UTILS.SCREEN.MOBILE} {
			margin: 40% 10%;
		}
	`,
	Technologies: styled.div`
		width: 80%;
		margin: 0 10%;
		padding: 10% 20%;
		display: flex;
		justify-content: center;
		justify-items: center;
	`,
	Intro: styled.div`
		width: 80%;
		margin: 0 10%;
		padding: 10% 20%;
		display: flex;
		justify-content: center;
		justify-items: center;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 100%;
			padding: 0% 5%;
			margin: 40% 0%;
			height: 70vh;
		}
	`,
	Footer: styled.div`
		width: 100%;
	`,
};

export default Container;
