import React from 'react';
import { SidebarContainer } from '../styles/Sidebar.styles';
import Task from './Task';
import { CreateTaskDTO } from '../DTOs/taskDTO';
import { dateToString } from '../commons/dateToString';

interface SidebarProps {
  tasks: CreateTaskDTO[];
}

const Sidebar = ({ tasks }: SidebarProps)  => {
  const today: Date = new Date();
  return (
    <SidebarContainer>
      <h2>Sidebar</h2>
      {tasks.map(element => (
        <Task name={element.title} completionTime={dateToString(today)} key={element.title} />
      ))}
    </SidebarContainer>
  );
}


export default Sidebar;
