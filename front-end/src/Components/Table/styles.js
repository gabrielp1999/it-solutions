import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1rem;
`;

export const Box = styled.div`
  width: 960px;
  overflow: auto;
`;

export const Table = styled.table`
  border-collapse: collapse;
  transition: 3s;
  background-color: ${({ dark }) =>
    dark ? "rgba(22,222,233,0.2)" : "rgba(22,22,22,0.1)"};
  border-radius: 2rem;
  border-bottom: none;

  .headerTable {
    color: ${({ dark }) => (dark ? "#53a1b3" : "#000")};
    border-top: none;
    text-align: center;
    font-size: 13rem;
    font-weight: 500;
  }
  .borderLeft {
    border-left: none;
  }
  .borderRight {
    border-right: none;
  }
  .borderBottom {
    border-bottom: none;
  }
  .red {
    background-color: ${({ dark }) => (dark ? "#000" : "#ee0000")};
    border-color: ${({ dark }) => (dark ? "#000" : "#ee0000")};
  }
  .color {
    color: ${({ dark }) => (dark ? "#eee" : "#000")};
  }
`;

export const Row = styled.tr`
  border: 1px solid;
  border-collapse: collapse;
  border-bottom: none;
`;

export const Coll = styled.td`
  padding: 0.5rem 1.5rem;
  border: 1px solid;
  border-color: #29abe2;
  border-top: none;
`;

export const Title = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;
export const Text = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

export const Button = styled.button`
  transition: 1s;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 0.2rem;
  color: #fff;
  background-color: ${({ dark }) => (dark ? "#4B0082" : "#0d6efd")};
  border-color: ${({ dark }) => (dark ? "#4B0082" : "#0d6efd")};
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;

  :hover {
    cursor: pointer;
    transition: 500ms;
    background-color: rgba(0, 0, 0, 0);
    color: black;
  }

  :disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }

  @media screen and (max-width: 764px) {
    width: 8rem;
    margin-top: 0.5rem;
  }
`;
