"use client";
import { useState } from "react";
import useInput from "../../hooks/useInput";
import FormInput from "../../components/FormInput";
import { Button } from "@/src/styles/Button.styles";
import { FormWrapper, FormContainer } from "@/src/styles/Form.styles";
import { useRouter } from "next/navigation";
import { UserSignupDTO } from "@/src/DTOs/userSignupDTO";
import { signup } from "@/services/signup";
import { ResponseObject } from "@/src/DTOs/responseDTO";

const Signup = () => {
  const router = useRouter();
  const name = useInput();
  const lastname = useInput();
  const email = useInput();
  const password = useInput();
  const confirmPassword = useInput();
  const [errors, setErrors] = useState<UserSignupDTO>({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    lastname: "",
  });
  const [sendError, setSendError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      lastname: "",
    });

    let hasError = false;

    if (!email.value) {
      setErrors((prev) => ({ ...prev, email: "El correo electrónico es obligatorio." }));
      hasError = true;
    }

    if (!password.value) {
      setErrors((prev) => ({ ...prev, password: "La contraseña es obligatoria." }));
      hasError = true;
    }

    if (!confirmPassword.value) {
      setErrors((prev) => ({ ...prev, confirmPassword: "Debes confirmar la contraseña." }));
      hasError = true;
    }

    if (!name.value) {
      setErrors((prev) => ({ ...prev, name: "El nombre es obligatorio." }));
      hasError = true;
    }

    if (!lastname.value) {
      setErrors((prev) => ({ ...prev, lastname: "El apellido es obligatorio." }));
      hasError = true;
    }

    if (hasError) return;

    const signupResult: ResponseObject<string> = await signup({
      name: name.value,
      lastname: lastname.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value
    } as UserSignupDTO);

    if (signupResult.success) router.push('/home');
    else {
      console.log(signupResult.data);
      setSendError(signupResult.data)
    };
    name.setValue("");
    lastname.setValue("");
    email.setValue("");
    password.setValue("");
    confirmPassword.setValue("");
  };

  const handleRouteLogin = () => {
    router.push('/login');
  }

  return (
    <FormContainer>
      <FormWrapper onSubmit={handleSubmit}>
        <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Planify</h1>
        <h3>Crear Cuenta</h3>
        <FormInput
          type="text"
          inputName="name"
          value={name.value}
          onChange={name.onChange}
          placeholder="Ingresa tu nombre"
          error={errors.name}
        />
        <FormInput
          type="text"
          inputName="lastname"
          value={lastname.value}
          onChange={lastname.onChange}
          placeholder="Ingresa tu apellido"
          error={errors.lastname}
        />
        <FormInput
          type="email"
          inputName="email"
          value={email.value}
          onChange={email.onChange}
          placeholder="Ingresa tu correo electrónico"
          error={errors.email}
        />
        <FormInput
          type="password"
          inputName="password"
          value={password.value}
          onChange={password.onChange}
          placeholder="Ingresa tu contraseña"
          error={errors.password}
        />
        <FormInput
          type="password"
          inputName="confirmPassword"
          value={confirmPassword.value}
          onChange={confirmPassword.onChange}
          placeholder="Confirma tu contraseña"
          error={errors.confirmPassword}
        />
        {sendError && (
          <div style={{ color: "red", fontSize: "0.875rem" }}>
            {Array.isArray(sendError) ? (
              sendError.map((err, index) => <div key={index}>{`- ${err}`}</div>)
            ) : (
              <div>{sendError}</div>
            )}
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <Button type="submit">Ingresar</Button>

          <p style={{ width: "50%", textAlign: "right" }}>
            ¿Ya tienes cuenta?
            <a onClick={handleRouteLogin} style={{ color: "#007bff", cursor: "pointer", textDecoration: "underline" }}>
              {"\n"}Inicia Sesión
            </a>
          </p>
        </div>
      </FormWrapper>
    </FormContainer>
  );
};

export default Signup;
