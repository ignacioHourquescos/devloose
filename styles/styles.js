import styled from "styled-components";
import UTILS from "../utils/utils";

const Styled = {
  Container: styled.div`
    width: 100%;
    margin: 0% 0%;
    margin-bottom: 0%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;

    @media ${UTILS.SCREEN.MOBILE} {
      margin: 0% 0%;
      width: 100%;
    }
  `,
};

export default Styled;
