import React, { useEffect, useState } from 'react';
import { SidebarContainer } from '../styles/Sidebar.styles';
import Task from './Task';
import { TaskDTO } from '../DTOs/taskDTO';
import { Button, ButtonContainerColumn } from '../styles/Button.styles';
import { clearCurrentTask } from '@/store/slices/currentTaskSlice';
import { getUserTasks } from '@/services/getUserTasks';
import { ResponseObject } from '../DTOs/responseDTO';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Swal from 'sweetalert2';
import { TasksScroll } from '../styles/Task.styles';

interface SidebarProps {
  updateSidebar: boolean
}

const Sidebar = ({ updateSidebar }: SidebarProps) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.loggedUser);
  const currentTask = useSelector((state: RootState) => state.currentTask.currentTask);
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [isInArchive, setIsInArchive] = useState<boolean>(false);
  const [isInCompleted, setIsInCompleted] = useState<boolean>(false);
  const [isAscOrder, setIsAscOrder] = useState<boolean>(true);

  const fetchUserTasks = async () => {
      if (!user || !user.id) return;      
      const response: ResponseObject<TaskDTO[] | string> = await getUserTasks(user.id, isInArchive, isAscOrder);
      if (response.success && typeof response.data !== 'string') setTasks(response.data);
      
      if (typeof response.data === 'string') {
        Swal.fire({
          icon: 'error',
          text: response.data,
          confirmButtonText: "Aceptar"
        })
      }
  };

  const handleCreateTaskForm = () => dispatch(clearCurrentTask());

  const handleArchiveCharge = () => setIsInArchive(!isInArchive);

  const handleCompletedCharge = () => setIsInCompleted(!isInCompleted);

  const handleChangeOrder = () => setIsAscOrder(!isAscOrder);

  useEffect(() => {
    fetchUserTasks();
  }, [user, isInArchive, isInCompleted, isAscOrder, updateSidebar]);

  return (
    <SidebarContainer>
      <ButtonContainerColumn>
        <Button type="button" bgColor="#badc58" hoverColor="#2ecc71" onClick={handleCreateTaskForm} style={{ width: "100%" }}>
          Nueva Tarea
        </Button>
        <Button type="button" bgColor="#f1c40f" hoverColor="#e67e22" onClick={handleArchiveCharge}>
          {!isInArchive ? "Archivadas" : "No archivadas"}
        </Button>
        <Button type="button" bgColor="#badc58" hoverColor="#e67e22" onClick={handleCompletedCharge}>
          {isInCompleted ? "Completadas" : "Pendientes"}
        </Button>
        <Button type="button" color='black' bgColor="white" hoverColor="lightGrey" activeColor='grey' onClick={handleChangeOrder}>
        {`Orden de Creación ${isAscOrder ? String.fromCharCode(8595) : String.fromCharCode(8593)}`}
        </Button>
      </ButtonContainerColumn>
      <TasksScroll>
        {tasks.map(element => (
          <Task task={element} key={element.id} />
        ))}
        </TasksScroll>
    </SidebarContainer>
  );
}

export default Sidebar;
