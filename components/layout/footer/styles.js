import styled from "styled-components";

export const Styled = {
	FooterContainer: styled.div`
		background-image: url("/propulz/footer.png");
		background-size: contain;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 5% 10%;

		background-color: #333;
		color: #fff;
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
};
