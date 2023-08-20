import styled from "styled-components";

export const Styled = {
	Inner: styled.div`
		display: ${(props) => (props.show ? "block" : "none")};
		width: 100%;
		height: 100vh;
		background: linear-gradient(to top, #197bf8, black);
	`,
};
