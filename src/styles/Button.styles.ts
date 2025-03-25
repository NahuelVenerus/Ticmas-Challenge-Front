import styled from 'styled-components';

interface ButtonProps {
  bgColor?: string;
  hoverColor?: string;
  activeColor?: string;
  color?: string;
}

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  margin: 1vh;
`;

export const StyledButtonContainer = styled(ButtonContainer)`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2vh;
`;


export const Button = styled.button<ButtonProps>`
display: flex;
justify-content: center;
align-items: center;
padding: 0.75rem;
background-color: ${({ bgColor }) => bgColor || '#4caf50'};
color: ${({ color }) => color || 'white'};
font-size: 1rem;
font-weight: 600;
border: none;
border-radius: 8px;
cursor: pointer;
transition: background-color 0.3s ease;
height: 6vh;
width: 100%;
flex-grow: 1;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || '#45a049'};
  }

  &:active {
    background-color: ${({ activeColor }) => activeColor || '#4caf50'};
  }
`;

Button.shouldForwardProp = (prop: string) => !['bgColor', 'hoverColor', 'activeColor', 'color'].includes(prop);
