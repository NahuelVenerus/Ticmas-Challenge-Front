import { ResponseObject } from "@/src/DTOs/responseDTO";
import { FormTaskDTO, TaskDTO } from "@/src/DTOs/taskDTO";
import axios, { AxiosError } from "axios";

export const editTask = async (taskData: FormTaskDTO): Promise<ResponseObject<TaskDTO | string>> => {
    if (!taskData.title || !taskData.description) return { success: false, data: "Debe ingresar un título o una descripción" };
    if (!taskData.id) return { success: false, data: "No se encuentra la tarea que desea editar" };
    try {
        const response: ResponseObject<TaskDTO> = await axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tasks/edit/${taskData.id}`, {
            title: taskData.title,
            description: taskData.description,
        })
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