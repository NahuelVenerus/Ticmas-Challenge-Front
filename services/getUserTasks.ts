import { ResponseObject } from "@/src/DTOs/responseDTO"
import { TaskDTO } from "@/src/DTOs/taskDTO"
import { AxiosError } from "axios";
import axiosInstance from "./axiosInstance";

export const getUserTasks = async (userId: number, isCompleted: boolean, order: boolean, isArchived: boolean, ): Promise<ResponseObject<TaskDTO[] | string>> => {
    if (!userId) return { success: false, data: "No se encuentra usuario de las tareas" };
    try {
        const orderDirection: string = order ? "ASC" : "DESC";

        const response: ResponseObject<TaskDTO[]> = await axiosInstance.get(
            `/tasks/user/${userId}?completed=${isCompleted}&order=${orderDirection}&archived=${isArchived}`
        )

        return {
            success: true,
            data: response.data,
        };
    } catch (error) {
        if (error instanceof AxiosError) return { success: false, data: "No se pudieron traer las tareas del usuario. Inténtelo más tarde" };
        return { success: false, data: "Ocurrió un error inesperado. Inténtelo más tarde" };
    }
};
