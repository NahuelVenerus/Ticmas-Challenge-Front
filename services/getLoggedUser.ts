import { ResponseObject } from "@/src/DTOs/responseDTO";
import { UserSignupDTO } from "@/src/DTOs/userSignupDTO";
import axios, { AxiosError } from "axios";

export const getLoggedUser = async (email: string): Promise<ResponseObject<UserSignupDTO | string>> => {
    try {
        if (!email) return { success: false, data: "El correo electrónico es obligatorio" };
        const user = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/email/${email}`)
        return {
            success: true,
            data: user.data
        }
    } catch (error) {
        if(error instanceof AxiosError) return {success: false, data: "No se pudo obtener el usuario. Inténtelo mas tarde"};
        return {success: false, data: "Ocurrió un error inesperado."};
    }
}