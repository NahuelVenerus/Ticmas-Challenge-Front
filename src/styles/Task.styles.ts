import styled from 'styled-components';

export const TaskContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 6vw;
  max-height: 15vh;
  padding: 1vw 0 0 1vw;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5px 0 5px 0;
  cursor: pointer;
`;

export const TaskTitle = styled.h3`
  font-size: 1.2vw;
  margin: 0;
  font-weight: bold;
  color: #333;
`;

export const TaskTime = styled.p`
  font-size: 1vw;
  color: #555;
  margin-top: 8px;
`;
