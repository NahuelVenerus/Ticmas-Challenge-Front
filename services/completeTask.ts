import { ResponseObject } from "@/src/DTOs/responseDTO";
import { AxiosError } from "axios";
import axiosInstance from "./axiosInstance";

export const completeTask = async (taskId: number): Promise<ResponseObject<string>> => {
    try {
        const response = await axiosInstance.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tasks/complete/${taskId}`);
        return {
            success: true,
            data: response.data
        }
    } catch (error) {
        if (error instanceof AxiosError) {
            return {
                success: false,
                data: "No se pudo completar la tarea debido a un problema con el servidor. Inténtelo nuevamente más tarde."
            }
        }
        return { success: false, data: "Ocurrió un error inesperado. Inténtelo nuevamente más tarde." }
    }
}