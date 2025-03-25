import { ResponseObject } from "@/src/DTOs/responseDTO"
import { TaskDTO } from "@/src/DTOs/taskDTO"
import axios, { AxiosError, AxiosResponse } from "axios"

export const getUserTasks = async (userId: number, isArchived: boolean): Promise<ResponseObject<TaskDTO[]>> => {
    try {
        const response: AxiosResponse<TaskDTO[]> = await axios.get(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/tasks/user/${userId}?archived=${isArchived}`
          );
                  
        return {
            success: true,
            data: Array.isArray(response.data) ? response.data : [response.data]
        }
    } catch (error) {
        if(error instanceof AxiosError) return {success: false, data: []};
        return {success: false, data: []};
    }
}