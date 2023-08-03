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

		@media ${UTILS.SCREEN.MOBILE} {
			width: 80%;
			padding: 3% 3%;
			margin: 10%;
		}
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
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
		padding: 0 8%;
		min-height: 30%;
	`,
	BulletContainer: styled.div`
		margin-left: 8%;
		margin-bottom: 2rem;
	`,
	Bullet: styled.div`
		padding-bottom: 0.5rem;
	`,
	Button: styled.button`
		background-color: ${UTILS.COLORS.BLACK};
		padding: 0.5rem 1rem;
		color: white;
		border-radius: 4rem;
		margin-left: 8%;
		margin-bottom: 4rem;
		border: 0px;
		&:hover {
			background-color: ${UTILS.COLORS.CARMINE};
			color: white;
			cursor: pointer;
		}
	`,
};
