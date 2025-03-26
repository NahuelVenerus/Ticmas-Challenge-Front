import { ResponseObject } from "@/src/DTOs/responseDTO"
import { TaskDTO } from "@/src/DTOs/taskDTO"
import axios, { AxiosError } from "axios";

export const getUserTasks = async (userId: number, isArchived: boolean, order: boolean): Promise<ResponseObject<TaskDTO[] | string>> => {
    if (!userId) return { success: false, data: "No se encuentra usuario de las tareas" };
    try {
        const orderDirection: string = order ? "ASC" : "DESC";
        const response: ResponseObject<TaskDTO[]> = await axios.get(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/tasks/user/${userId}?archived=${isArchived}&order=${orderDirection}`
        );

        return {
            success: true,
            data: response.data,
        };
    } catch (error) {
        if (error instanceof AxiosError) return { success: false, data: "No se pudieron traer las tareas del usuario. Inténtelo más tarde" };
        return { success: false, data: "Ocurrió un error inesperado. Inténtelo más tarde" };
    }
};
