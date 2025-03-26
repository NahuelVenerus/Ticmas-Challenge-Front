import { ResponseObject } from "@/src/DTOs/responseDTO";
import axios, { AxiosError } from "axios";

export const completeTask = async (taskId: number): Promise<ResponseObject<string>> => {
    try {
        console.log("In complete Task: ", taskId);
        
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tasks/complete/${taskId}`);
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