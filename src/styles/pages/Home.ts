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

export const SearchWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const SummonerInput = styled.input`
  width: min(80vw, 750px);;
  height: 54px;

  position: relative;

  font-size: 22px;

  margin-top: 12px;
  padding: 0 10px 0 65px;
  border-radius: 7px 0 0 7px;
  background-color: #fff;


  &::placeholder {
    color: gray;
  }
`;

export const SearchButton = styled.a`
  width: 54px;
  height: 54px;

  font-size: 22px;
  font-weight: bold;

  text-decoration: none;

  padding: 12px 0;
  border-radius: 0 7px 7px 0;
  background-color: #fff;

  margin-top: 12px;

  cursor: pointer;

  color: #023e8a;
`;

