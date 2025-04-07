"use client"
import React, { useEffect, useState } from 'react';
import { DescriptionInput, TaskFormContainer, TitleInput } from '../styles/Taskform.styles';
import { Button, ButtonContainer } from '../styles/Button.styles';
import useInput from '../hooks/useInput';
import { createTask } from '@/services/createTask';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { editTask } from '@/services/editTask';
import { ResponseObject } from '../DTOs/responseDTO';
import { TaskDTO } from '../DTOs/taskDTO';
import Swal from 'sweetalert2';
import { HomeTitle } from '../styles/Home.styles';
import { archiveTask } from '@/services/archiveTask';
import { clearCurrentTask } from '@/store/slices/currentTaskSlice';
import { deleteTask } from '@/services/deleteTask';
import { completeTask } from '@/services/completeTask';

interface TaskFormProps {
  setUpdateSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskForm = ({ setUpdateSidebar }: TaskFormProps) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.loggedUser);
  const currentTask = useSelector((state: RootState) => state.currentTask.currentTask);
  const title = useInput();
  const description = useInput();
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isArchived, setIsArchived] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  
  const clearFields = () => {
    title.setValue('');
    description.setValue('');
    dispatch(clearCurrentTask());
  }

  useEffect(() => {
    const editing = currentTask?.id !== 0;
    setIsEditing(editing);  
    if (!editing) {
      clearFields();
      setIsCompleted(false);
      setIsArchived(false);
    } else if (currentTask) {
      title.setValue(currentTask.title);
      description.setValue(currentTask.description);
      setIsArchived(currentTask.isArchived);
      setIsCompleted(currentTask.isCompleted);
    }
  }, [currentTask]);
  
  const handleSubmitTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(isEditing && !currentTask?.id || !user?.id) {
      Swal.fire({
        icon: "error",
        text: "No se seleccionó ninguna tarea",
        confirmButtonText: "Aceptar"
      })
      return;
    }
    if (isEditing) {
      if(currentTask?.id) {
        const response: ResponseObject<TaskDTO | string> = await editTask({
          id: currentTask?.id,
          title: title.value,
          description: description.value,
        })
        if (typeof response.data === 'string') Swal.fire({
          icon: "error",
          text: response.data,
          confirmButtonText: 'Aceptar'
        })
      }
    } else {
      const response = await createTask({
        title: title.value,
        description: description.value,
        isArchived,
        isCompleted,
        userId: user?.id,
      });
      if(typeof response.data === 'string' )
      Swal.fire({
        icon: "error",
        text: response.data,
        confirmButtonText: "Aceptar"
      });      
    }    
    clearFields();
    setUpdateSidebar((prev) => !prev);
  };

  const handleArchive = () => {
    if (!currentTask || !currentTask.id) return;
    archiveTask(currentTask.id);
    const updatedIsArchived: boolean = !isArchived;
    setIsArchived(updatedIsArchived);
    setUpdateSidebar((prev) => !prev);
  };
  
  const handleDeleteTask = async () => {
    if (!currentTask || !currentTask.id) return;
    const result = await Swal.fire({
      icon: "warning",
      text: `¿Seguro que desea eliminar la tarea ${currentTask?.title}?`,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
      showCancelButton: true,
      cancelButtonColor: '#d33',
    });
    if (result.isConfirmed) {
      const response: ResponseObject<boolean | string> = await deleteTask(currentTask?.id);
      setUpdateSidebar((prev) => !prev);
      clearFields();
      if (typeof response.data === 'string') {
        Swal.fire({
          icon: 'error',
          text: response.data,
          confirmButtonText: 'Aceptar'
        })
      }
      dispatch(clearCurrentTask())
    } else return;
  }

  const handleComplete = async () => {
    if (!currentTask?.id) return;
    setIsCompleted((prev) => !prev);
  
    const response = await completeTask(currentTask.id);
    if (!response.success) {
      setIsCompleted((prev) => !prev);
      Swal.fire({
        icon: "error",
        text: response.data,
        confirmButtonText: "Aceptar",
      });
    }
  };  

  return (
    <div>
      {currentTask ? (
        <TaskFormContainer onSubmit={handleSubmitTask}>
          <ButtonContainer>
          <TitleInput
            type="text"
            value={title.value}
            onChange={title.onChange}
            placeholder="Título"
          />
          {isCompleted ? (
            <Button
            type='button'
            bgColor="#80ed99" 
            color="white"
            style={{margin: "0 5% ", width: "30%"}}
            onClick={handleComplete}
            disabled={!isEditing}
            >Completada</Button>
          ) : (
            <Button
            type='button'
            bgColor="white" 
            color="grey"
            hoverColor="#45a049"
            activeColor='#7ae582'
            style={{margin: "0 5% ", width: "30%"}}
            onClick={handleComplete}
            disabled={!isEditing}
            >Completar</Button>
          )}
          </ButtonContainer>
          <DescriptionInput
            placeholder="Descripción"
            value={description.value}
            onChange={description.onChange}
          />

          <ButtonContainer>
            {isEditing ? (
            <Button 
            type="submit" 
            bgColor="#4caf50" 
            hoverColor="#45a049"
            disabled={
              title.value === currentTask.title && description.value === currentTask.description && isCompleted === currentTask.isCompleted || 
              !title.value || !description.value} >
              Editar Tarea
            </Button>
            ) : (
            <Button 
            type="submit" 
            bgColor="#4caf50" 
            hoverColor="#45a049"
            disabled={!title.value || !description.value}
            >
              Crear Tarea
            </Button>
            )}
            <Button
              type="button"
              bgColor="#f39c12"
              hoverColor="#e67e22"
              activeColor="#e67e22"
              onClick={handleArchive}
              disabled={!isEditing || !title.value || !description.value}
            >
              {isArchived ? 'Desarchivar' : 'Archivar'}
            </Button>
            <Button 
            type="button" 
            bgColor="#e74c3c" 
            hoverColor="#c0392b" 
            onClick={handleDeleteTask}
            disabled={!isEditing || !title.value || !description.value}>
              Eliminar
            </Button>
          </ButtonContainer>
        </TaskFormContainer>
      ) : (
        <HomeTitle>
          <div>
            <h1>Planify</h1>
            <p>Para crear o editar tareas, seleccione alguna de la barra lateral</p>
          </div>
        </HomeTitle>
      )}
    </div>
  );
};

export default TaskForm;
