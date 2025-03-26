import styled from 'styled-components';

interface ButtonProps {
  bgColor?: string;
  hoverColor?: string;
  activeColor?: string;
  color?: string;
  disabled?: boolean;
}

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  margin: 1vh;
`;

export const ButtonContainerColumn = styled(ButtonContainer)`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  width: 100%;
`;


export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  background-color: ${({ bgColor, disabled }) => disabled ? 'grey' : bgColor || '#e74c3c'};
  color: ${({ color, disabled }) => disabled ? 'light-grey' : color || 'white'};
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  height: 6vh;
  width: 100%;
  flex-grow: 1;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ hoverColor, disabled }) => (disabled ? 'grey' : hoverColor || '#c0392b')};
  }

  &:active {
    background-color: ${({ activeColor, disabled }) => (disabled ? 'grey' : activeColor || '#e74c3c')};desactivado
  }
`;

Button.shouldForwardProp = (prop: string) => !['bgColor', 'hoverColor', 'activeColor', 'color'].includes(prop);
