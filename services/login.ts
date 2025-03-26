import { ResponseObject } from "@/src/DTOs/responseDTO";
import { UserLoginDTO } from "@/src/DTOs/userLoginDTO";
import axios, { AxiosError } from "axios";

export const login = async (loginFormData: UserLoginDTO): Promise<ResponseObject<string>> => {
  if(!loginFormData.email || !loginFormData.password) return {success: false, data: "Debe ingresar email y contraseña"}
  try {
    const response: ResponseObject<string> = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/login`, loginFormData);
    
    return {
      success: true,
      data: response.data
    };

  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        success: false,
        data: "No se pudo iniciar sesión. Inténtelo nuevamente más tarde."
      };
    } else {
      return {
        success: false,
        data: "Ocurrió un error inesperado. Inténtelo nuevamente más tarde."
      };
    }
  }
};
