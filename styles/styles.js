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
		margin: 20% 10%;
		display: flex;
		flex-wrap: wrap;
		@media ${UTILS.SCREEN.MOBILE} {
			margin: 20% 5%;
			width: 90%;
			${"" /* margin-bottom: 50%; */}
		}
	`,
	Profile: styled.div`
		width: 80%;
		margin: 0 10%;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		height: 100%;
		padding: 0%;
		@media ${UTILS.SCREEN.MOBILE} {
			margin: 20% 10%;
			margin-bottom: 50%;
		}
	`,
	Technologies: styled.div`
		width: 80%;
		margin: 0 10%;
		padding: 10% 0%;
		display: flex;
		justify-content: center;
		justify-items: center;
		@media ${UTILS.SCREEN.MOBILE} {
			margin-bottom: 50%;
		}
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
			margin: 20% 0%;
			margin-bottom: 10%;
			${"" /* height: 70vh; */}
		}
	`,
	Ingredients: styled.div`
		width: 100%;
	`,
	Footer: styled.div`
		width: 100%;
	`,
};

export default Container;
