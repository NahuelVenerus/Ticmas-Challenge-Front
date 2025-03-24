import styled from "styled-components";

interface ButtonProps {
  bgColor?: string;
  color?: string;
  hoverColor?: string;
  activeColor?: string;
}

export const Button = styled.button<ButtonProps>`
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: ${(props) => props.bgColor || '#4caf50'};  /* Color de fondo dinámico */
  color: ${(props) => props.color || 'white'};  /* Color del texto dinámico */

  &:hover {
    background-color: ${(props) => props.hoverColor || '#45a049'};  /* Color al pasar el mouse */
  }

  &:active {
    background-color: ${(props) => props.activeColor || '#4caf50'};  /* Color al hacer clic */
  }
`;
