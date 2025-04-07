import { ResponseObject } from "@/src/DTOs/responseDTO";
import { UserSignupDTO } from "@/src/DTOs/userSignupDTO";
import { AxiosError } from "axios";
import { login } from "./login";
import axiosInstance from "./axiosInstance";

export const signup = async (signupFormData: UserSignupDTO): Promise<ResponseObject<string>> => {
  if (!signupFormData.name || !signupFormData.lastname || !signupFormData.email || !signupFormData.password || !signupFormData.confirmPassword) {
    return { success: false, data: "Debe ingresar todos los datos para crear su cuenta" }
  }
  try {
    const response: ResponseObject<string> = await axiosInstance.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/create`, signupFormData);

    await login({ email: signupFormData.email, password: signupFormData.password });

    return {
      success: true,
      data: response.data
    };

  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 409) {
        return {
          success: false,
          data: "Ya existe una cuenta con esa dirección de correo electrónico. Por favor, intenta con otra o accede a tu cuenta si ya tienes una."
        };
      }
      if (error.response?.status === 400) {
        return {
          success: false,
          data: error.response.data.message
        };
      }
      return {
        success: false,
        data: error.response?.statusText || "No se pudo crear la cuenta debido a un problema con el servidor. Inténtelo nuevamente más tarde."
      };
    } else {
      return {
        success: false,
        data: "Ocurrió un error inesperado. Inténtelo nuevamente más tarde."
      };
    }
  }
};
