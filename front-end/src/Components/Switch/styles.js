import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  input[type="checkbox"] {
    appearance: none;
    width: 120px;
    height: 55px;

    background-color: #707070;
    border-radius: 50px;
    position: absolute;
    cursor: pointer;
    transition: 1s;
  }
  input[type="checkbox"]::before {
    content: "";
    position: absolute;
    width: 45px;
    height: 45px;
    background-color: #d5d5d5;
    border-radius: 50%;
    left: 10px;
    top: 10px;
    transition: 1s;
  }
  input[type="checkbox"]::after {
    content: "OFF";
    position: absolute;
    color: #34384b;
    font-size: 17px;
    left: 16px;
    top: 25px;
    transition: 1s;
  }
  input[type="checkbox"]:checked {
    background: linear-gradient(91deg, #ff01a5d4, #4b00ffd4);
  }
  input[type="checkbox"]:checked:before {
    background: #000;
    left: 70px;
  }
  input[type="checkbox"]:checked::after {
    content: "ON";
    color: #fff;
    left: 79px;
  }
`;
export const Input = styled.input``;
