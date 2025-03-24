import styled from "styled-components";

export const Input = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== "hasError"
})<{ hasError?: boolean }>`
  width: 100%;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  padding: 15px;
  margin: 5px 0;

  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4caf50;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 0;
    left: 8px;
    font-size: 0.8rem;
    color: #4caf50;
  }

  ${({ hasError }) => hasError && "border-color: red;"}
`;
