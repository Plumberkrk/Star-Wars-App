import styled from "styled-components";

export const Label = styled.label`
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 12px;
  color: black;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid white;
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 10px;
  margin: 10px 0px;
  background-color: #efefef;

  resize: none;
  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;

export const Button = styled.button`
  background-color: black;
  margin-top: 5px;
  padding: 5px 10px;
  border-radius: 10px;
  color: white;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #9c9c9c;
  height: 100vh;
`;

export const ErrorMessage = styled.div`
  font-size: 20px;
  color: #ff3333;
`;

export const Wrapper = styled.div``;
