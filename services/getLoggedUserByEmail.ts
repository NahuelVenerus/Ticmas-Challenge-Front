import { ResponseObject } from "@/src/DTOs/responseDTO";
import { UserSignupDTO } from "@/src/DTOs/userSignupDTO";
import { AxiosError } from "axios";
import axiosInstance from "./axiosInstance";

export const getLoggedUserByEmail = async (email: string): Promise<ResponseObject<UserSignupDTO | string>> => {
    try {
        if (!email) return { success: false, data: "El correo electrónico es obligatorio" };
        const response: ResponseObject<UserSignupDTO> = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/email/${email}`)
        return {
            success: true,
            data: response.data
        }
    } catch (error) {
        if(error instanceof AxiosError) return {success: false, data: "No se pudo obtener el usuario. Inténtelo mas tarde"};
        return {success: false, data: "Ocurrió un error inesperado."};
    }
}