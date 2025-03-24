import React from 'react';
import { SidebarContainer } from '../styles/Sidebar.styles';
import Task from './Task';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h2>Sidebar</h2>
      <Task name="Tarea 1" time="De 10:00hs a 12:00hs" />
    </SidebarContainer>
  );
}

export default Sidebar;
