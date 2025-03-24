import { ResponseObject } from "@/src/DTOs/responseDTO";
import { UserLoginDTO } from "@/src/DTOs/userLoginDTO";
import axios, { AxiosError } from "axios";

export const login = async (loginFormData: UserLoginDTO): Promise<ResponseObject<string>> => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/login`, loginFormData);

    localStorage.setItem('token', response.data);
    
    return {
      success: true,
      data: "Token created correctly"
    };

  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return {
        success: false,
        data: error.response?.data?.error || error.message || "Error desconocido"
      };
    } else {
      return {
        success: false,
        data: "Error inesperado"
      };
    }
  }
};
