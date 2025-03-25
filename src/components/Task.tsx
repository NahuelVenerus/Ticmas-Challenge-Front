import React from 'react';
import { TaskContainer, TaskTitle, TaskTime } from '../styles/Task.styles'
import { useDispatch } from 'react-redux';
import { setCurrentTask } from '@/store/slices/currentTaskSlice';
import { TaskDTO } from '../DTOs/taskDTO';

interface TaskProps {
  task: TaskDTO
}

const Task = ({ task }: TaskProps) => {
  const dispatch = useDispatch();

  const handleSelect = () => {
    dispatch(setCurrentTask(task))
  }

  return (
    <TaskContainer onClick={handleSelect}>
      <TaskTitle>{task.title}</TaskTitle>
      <TaskTime>{task.description}</TaskTime>
    </TaskContainer>
  );
}

export default Task;
