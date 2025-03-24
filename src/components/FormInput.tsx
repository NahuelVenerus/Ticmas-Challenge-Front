import React from "react";
import { Input } from "../styles/Input.styles";

interface FormInputProps {
  type: string;
  inputName: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  error?: string;
}

const FormInput = ({ error, inputName, ...props }: FormInputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div style={{ position: "relative", marginBottom: "1.5rem" }}>
        <Input {...props} name={inputName} hasError={!!error} id={inputName} />
      {error && <div style={{ color: "red", fontSize: "0.875rem" }}>{error}</div>}
    </div>
  );
};

export default FormInput;
