import React from 'react';
import { TaskContainer, TaskTitle, TaskTime } from '../styles/Task.styles'

interface TaskProps {
  name: string;
  time: string;
}

const Task = ({ name, time }: TaskProps) => {
  return (
    <TaskContainer>
      <TaskTitle>{name}</TaskTitle>
      <TaskTime>{time}</TaskTime>
    </TaskContainer>
  );
}

export default Task;
