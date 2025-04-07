import { ResponseObject } from "@/src/DTOs/responseDTO";
import { TaskDTO } from "@/src/DTOs/taskDTO";
import { AxiosError } from "axios";
import axiosInstance from "./axiosInstance";

export const archiveTask = async (taskId: number): Promise<ResponseObject<TaskDTO | string>> => {
    if (!taskId) return { success: false, data: "No se encuentra la tarea que desea archivar" };
    try {
        const response: ResponseObject<TaskDTO> = await axiosInstance.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tasks/archive/${taskId}`)
        return { success: true, data: response.data }
    } catch (error) {
        if (error instanceof AxiosError) {
            return {
                success: false,
                data: "No se pudo actualizar la tarea debido a un problema con el servidor. Inténtelo nuevamente más tarde."
            }
        }
        return { success: false, data: "Ocurrió un error inesperado. Inténtelo nuevamente más tarde." }
    }
}