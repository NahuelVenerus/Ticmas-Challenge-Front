import React, { useState } from "react";
import { ButtonContainer, DescriptionInput, TaskFormContainer, TitleInput } from "../styles/Taskform.styles";
import { Button } from "../styles/Button.styles";

const TaskForm = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onCreate({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <TaskFormContainer onSubmit={handleSubmit}>
      <TitleInput
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
      />

      <DescriptionInput
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <ButtonContainer>
        <Button type="submit" bgColor="#4caf50" hoverColor="#45a049" activeColor="#4caf50">Aceptar</Button>
        <Button type="button" bgColor="#f39c12" hoverColor="#e67e22" activeColor="#f39c12">Archivar</Button>
        <Button type="button" bgColor="#e74c3c" hoverColor="#c0392b" activeColor="#e74c3c">Eliminar</Button>
      </ButtonContainer>

    </TaskFormContainer>
  );
};

export default TaskForm;
