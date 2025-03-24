import React from 'react';
import { TaskContainer, TaskTitle, TaskTime } from '../styles/Task.styles'

interface TaskProps {
  name: string;
  completionTime: string;
}

const Task = ({ name, completionTime }: TaskProps) => {
  return (
    <TaskContainer>
      <TaskTitle>{name}</TaskTitle>
      <TaskTime>{completionTime}</TaskTime>
    </TaskContainer>
  );
}

export default Task;
