import styled from "styled-components";

export const Styled = {
	FooterContainer: styled.div`
		position: relative; /* Set position to relative */
		background-color: #241b17; /* Brownish-black color */
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 5% 10%;
		color: #fff;
	`,

	SvgContainer: styled.div`
		transform: translateY(5px);
		top: 0px; /* Adjust this value to control the curvature effect */
	`,
	LeftSection: styled.div`
		display: flex;
		align-items: center;
	`,

	RightSection: styled.div`
		display: flex;
		align-items: center;
	`,

	Link: styled.a`
		color: #fff;
		text-decoration: none;
		margin: 0 10px;
	`,

	Copyright: styled.div`
		margin-left: 10px;
	`,
	RocketContainer: styled.div`
		position: fixed;
		bottom: 5%;
		left: 47.5%;
	`,
};
