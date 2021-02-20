import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > h1 {
    font-size: 54px;
    margin-top: 40px;
    font-weight: bold;
  }

  >p {
    margin-top: 24px;
    font-size: 24px;
    font-weight: normal;
    line-height: 32px;
  }

  > svg {
    width: 45px;
    height: 45px;
  }
`;
