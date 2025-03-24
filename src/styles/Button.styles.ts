import styled from 'styled-components';

interface ButtonProps {
  bgColor?: string;
  hoverColor?: string;
  activeColor?: string;
}

export const Button = styled.button<ButtonProps>`
  padding: 0.75rem;
  background-color: ${({ bgColor }) => bgColor || '#4caf50'}; /* Usa el valor de bgColor o el valor por defecto */
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || '#45a049'}; /* Usa el valor de hoverColor o el valor por defecto */
  }

  &:active {
    background-color: ${({ activeColor }) => activeColor || '#4caf50'}; /* Usa el valor de activeColor o el valor por defecto */
  }
`;

Button.shouldForwardProp = (prop: string) => !['bgColor', 'hoverColor', 'activeColor'].includes(prop);
