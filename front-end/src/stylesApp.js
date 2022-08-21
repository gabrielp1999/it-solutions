import styled from "styled-components";

export const Wrapper = styled.div`
  transition: 1s;
  background-color: ${({ dark }) => (dark ? "#141e24" : "#eee")};
  height: 100vh;

  h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    color: ${({ dark }) => (dark ? "#53a1b3" : "#000")};
  }
`;
