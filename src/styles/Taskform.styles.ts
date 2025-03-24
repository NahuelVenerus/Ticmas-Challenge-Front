import styled from "styled-components";

export const TaskFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    flex-grow: 1;
    min-height: 70vh;
    margin: 5vw 5vw 0 25vw; 
    max-width: 1500px;
`;

export const TitleInput = styled.input`
    border: none;
    border-bottom: 2px solid #ccc;
    padding: 12px;
    font-size: 20px;
    outline: none;
    width: 100%;
    background-color: transparent;
    margin-bottom: 5vh;

    &:focus {
      border-bottom: 2px solid #007bff;
    }
`;

export const DescriptionInput = styled.textarea`
    width: 100%;
    min-height: 200px;
    flex-grow: 1;
    resize: none;
    padding: 2%;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 18px;
    outline: none;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    margin-top: 5vh;
`;

