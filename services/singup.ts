import { ResponseObject } from "@/src/DTOs/responseDTO";
import { UserSignupDTO } from "@/src/DTOs/userSignupDTO";
import axios, { AxiosError } from "axios";
import { login } from "./login";

export const signup = async (signupFormData: UserSignupDTO): Promise<ResponseObject<string>> => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/create`, signupFormData);

    await login({email: signupFormData.email, password: signupFormData.password});
    
    return {
      success: true,
      data: response.data
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
