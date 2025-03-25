import React from 'react';
import { DescriptionInput, TaskFormContainer, TitleInput } from '../styles/Taskform.styles';
import { Button, ButtonContainer } from '../styles/Button.styles';
import useInput from '../hooks/useInput';
import { createTask } from '@/services/createTask';

const TaskForm = () => {
  const title = useInput();
  const description = useInput();
  const today = new Date();

  const handleSubmitCreateTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!title.value || !description.value) return;
    createTask({
      title: title.value, 
      description: description.value,
      isArchived: false,
      isCompleted: false,
      completionDate: today,
      userId: 1
    })
    title.setValue("");
    description.setValue("");
  }
  
  return (
    <TaskFormContainer onSubmit={handleSubmitCreateTask}>
      <TitleInput
        type="text"
        value={title.value}
        onChange={title.onChange}
        placeholder="Título"
      />

      <DescriptionInput
        placeholder="Descripción"
        value={description.value}
        onChange={description.onChange}
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
