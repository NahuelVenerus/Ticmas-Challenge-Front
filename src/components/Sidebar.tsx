import React, { useEffect, useState } from 'react';
import { SidebarContainer } from '../styles/Sidebar.styles';
import Task from './Task';
import { TaskDTO } from '../DTOs/taskDTO';
import { dateToString } from '../commons/dateToString';
import { Button, ButtonContainer, StyledButtonContainer } from '../styles/Button.styles';
import { clearCurrentTask } from '@/store/slices/currentTaskSlice';
import { getUserTasks } from '@/services/getUserTasks';
import { ResponseObject } from '../DTOs/responseDTO';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Sidebar = () => {
  const user = useSelector((state: RootState) => state.user.loggedUser);
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [isInArchive, setIsInArchive] = useState<boolean>(false);
  const [isInCompleted, setIsInCompleted] = useState<boolean>(false);

  const fetchUserTasks = async () => {
    try {
      if (!user || !user.id) return;
      const response: ResponseObject<TaskDTO[]> = await getUserTasks(user.id, isInArchive);
      if (response.success) {
        setTasks(response.data);
      } else {
        console.error("Error al obtener tareas:", response.data);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  const handleClearForm = () => clearCurrentTask();

  const handleArchiveCharge = () => {
    setIsInArchive(prevState => !prevState);
  };

  const handleCompletedCharge = () => {
    setIsInCompleted(prevState => !prevState);
  };

  useEffect(() => {
    fetchUserTasks();
  }, [isInArchive, isInCompleted]);

  const today: Date = new Date();

  return (
    <SidebarContainer>
      <ButtonContainer>
        <Button type="button" bgColor="#badc58" hoverColor="#2ecc71" onClick={handleClearForm} style={{ width: "100%" }}>
          Nueva Tarea
        </Button>
      </ButtonContainer>
      <StyledButtonContainer>
        <Button type="button" bgColor="#f1c40f" hoverColor="#e67e22" onClick={handleArchiveCharge}>
          {!isInArchive ? "Archivadas" : "No archivadas"}
        </Button>
        <Button type="button" bgColor="#f1c40f" hoverColor="#e67e22" onClick={handleCompletedCharge}>
          {isInCompleted ? "Completadas" : "Incompletas"}
        </Button>
      </StyledButtonContainer>
      <div style={{ maxHeight: '60vh', overflowY: 'auto', width: "100%" }}>
        {tasks.map(element => (
          <Task task={element} key={element.id} />
        ))}
      </div>
    </SidebarContainer>
  );
}

export default Sidebar;
