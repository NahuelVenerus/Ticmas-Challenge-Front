import { ResponseObject } from "@/src/DTOs/responseDTO";
import { UserSignupDTO } from "@/src/DTOs/userSignupDTO";
import axios, { AxiosError } from "axios";
import { login } from "./login";

export const signup = async (signupFormData: UserSignupDTO): Promise<ResponseObject<string>> => {  
  if(!signupFormData.name || !signupFormData.lastname || !signupFormData.email || !signupFormData.password || !signupFormData.confirmPassword) {
    return {success: false, data: "Debe ingresar todos los datos para crear su cuenta"}
  }
  try {
    const response: ResponseObject<string> = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/create`, signupFormData);

    await login({email: signupFormData.email, password: signupFormData.password});
    
    return {
      success: true,
      data: response.data
    };

  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return {
        success: false,
        data: "No se pudo crear la cuenta debido a un problema con el servidor. Inténtelo nuevamente más tarde."
      };
    } else {
      return {
        success: false,
        data: "Ocurrió un error inesperado. Inténtelo nuevamente más tarde."
      };
    }
  }
};
