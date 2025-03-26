import { ResponseObject } from "@/src/DTOs/responseDTO";
import axios, { AxiosError } from "axios";

export const deleteTask = async (taskId: number): Promise<ResponseObject<boolean | string>> => {
    try {
        const response: ResponseObject<boolean> = await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tasks/delete/${taskId}`);
        return { success: true, data: response.data }
    } catch (error) {
        if (error instanceof AxiosError) return { success: false, data: "No se pudo eliminar la tarea debido a un problema con el servidor. Inténtelo nuevamente mas tarde" }
        return { success: false, data: "No se pudo eliminar la tarea. Inténtelo nuevamente más tarde." }
    }
}