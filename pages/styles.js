import styled from "styled-components";

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
	`,
	Footer: styled.div`
		width: 100%;
	`,
};

export default Container;
