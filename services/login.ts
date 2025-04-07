import { ResponseObject } from "@/src/DTOs/responseDTO";
import { UserLoginDTO } from "@/src/DTOs/userLoginDTO";
import { AxiosError } from "axios";
import axiosInstance from "./axiosInstance";

export const login = async (loginFormData: UserLoginDTO): Promise<ResponseObject<string>> => {
  if(!loginFormData.email || !loginFormData.password) return {success: false, data: "Debe ingresar email y contraseña"}
  try {
    const response: ResponseObject<string> = await axiosInstance.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, loginFormData);
    
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
