"use client";
import { useState } from "react";
import { UserLoginDTO } from "../../DTOs/userLoginDTO";
import FormInput from "../../components/FormInput";
import useInput from "../../hooks/useInput";
import { useRouter } from "next/navigation";
import { FormContainer, FormWrapper } from "@/src/styles/Form.styles";
import { Button } from "@/src/styles/Button.styles";
import { login } from "@/services/login";
import { ResponseObject } from "@/src/DTOs/responseDTO";
import { UserSignupDTO } from "@/src/DTOs/userSignupDTO";
import { getLoggedUserByEmail } from "@/services/getLoggedUserByEmail";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedUser } from "@/store/slices/userSlice";
import { RootState } from "@/store/store";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user.loggedUser)
  const email = useInput();
  const password = useInput();
  const [errors, setErrors] = useState<UserLoginDTO>({ email: "", password: "" });
  const [sendError, setSendError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({
      email: "",
      password: ""
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

    if (hasError) return;

    const loginResult: ResponseObject<string> = await login({ email: email.value, password: password.value } as UserLoginDTO);
    
    
    
    if (loginResult.success){
      const response: ResponseObject<UserSignupDTO | string> = await getLoggedUserByEmail(email.value);
      if (response.success && typeof response.data !== "string") {
        dispatch(setLoggedUser(response.data));
        sessionStorage.setItem('token', loginResult.data);
      }
      if(user) router.push('/home');
      
    }
    else {
      setSendError("Los datos ingresados son incorrectos");
      
      
    };
    email.setValue("");
    password.setValue("");
  }

  const handleRouteSignup = () => {
    router.push('/signup');
  };

  return (
    <FormContainer>
      <FormWrapper onSubmit={handleSubmit}>
        <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Planify</h1>
        <h3>Iniciar Sesión</h3>
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
        {sendError && <div style={{ color: "red", fontSize: "0.875rem" }}>{sendError}</div>}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <Button type="submit">Ingresar</Button>

          <p style={{ width: "50%", textAlign: "right" }}>
            ¿No tienes cuenta?
            <a onClick={handleRouteSignup} style={{ color: "#007bff", cursor: "pointer", textDecoration: "underline" }}>
              Registrate
            </a>
          </p>
        </div>
      </FormWrapper>
    </FormContainer>
  );
};

export default Login;
