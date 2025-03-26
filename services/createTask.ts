import { ResponseObject } from "@/src/DTOs/responseDTO";
import { TaskDTO } from "@/src/DTOs/taskDTO";
import axios, { AxiosError } from "axios";

export const createTask = async (task: TaskDTO): Promise<ResponseObject<TaskDTO | string>> => {
    if(!task.title || !task.description) return {success: false, data: "Debe ingresar título y descripción"};
    if(!task.userId) return {success: false, data: "No se encontró el usuario creador de la tarea"};
    try {
        console.log("Estoy en createTask");
        const response: ResponseObject<TaskDTO> = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tasks/create`, task);
        
        return {
            success: true,
            data: response.data,
        };

    } catch (error) {
        if (error instanceof AxiosError) {
            return {
                success: false,
                data: "No se pudo crear la tarea debido a un problema con el servidor. Inténtelo nuevamente más tarde."
            };
        } else {
            return {
                success: false,
                data: "Ocurrió un error inesperado. Inténtelo nuevamente más tarde."
            };
        }
    }
}
