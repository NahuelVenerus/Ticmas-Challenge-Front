import { setCurrentTask } from '@/store/slices/taskSlice';
import { RootState } from '../../store/store';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask } from '@/services/createTask';
import { DescriptionInput, TaskFormContainer, TitleInput } from '../styles/Taskform.styles';
import { Button, ButtonContainer } from '../styles/Button.styles';
import useInput from '../hooks/useInput';

const TaskForm = () => {
  const title = useInput();
  const description = useInput();
  const dispatch = useDispatch();
  const currentTask = useSelector((state: RootState) => state.tasks.currentTask);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setCurrentTask({title: title.value, description: description.value, isCompleted: false, isArchived: false, userId: 1}))

    if (!currentTask?.title.trim()) {
      console.log("Título vacío, no se puede crear la tarea");
      return;
    }

    createTask(currentTask);
  };

  useEffect(() => {

  }, [title, description])

  return (
    <TaskFormContainer onSubmit={handleSubmit}>
      <TitleInput
        type="text"
        value={title.value}
        onChange={(e) => title.setValue(e.target.value)}
        placeholder="Título"
      />

      <DescriptionInput
        placeholder="Descripción"
        value={description.value}
        onChange={(e) => description.setValue(e.target.value)}
      />
      <ButtonContainer>
        <Button type="submit" bgColor="#4caf50" hoverColor="#45a049" activeColor="#4caf50">Crear Tarea</Button>
        <Button type="button" bgColor="#f39c12" hoverColor="#e67e22" activeColor="#f39c12">Archivar</Button>
        <Button type="button" bgColor="#e74c3c" hoverColor="#c0392b" activeColor="#e74c3c">Eliminar</Button>
      </ButtonContainer>

    </TaskFormContainer>
  );
};

export default TaskForm;
