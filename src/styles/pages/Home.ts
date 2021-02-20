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

`;

export const SummonerInput = styled.input`
  width: min(90vw, 800px);;
  height: 54px;

  position: relative;

  font-size: 22px;

  margin-top: 12px;
  padding: 0 10px 0 65px;
  border-radius: 7px;
  background-color: #fff;


  &::placeholder {
    color: gray;
  }
`;

