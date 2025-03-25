import { ResponseObject } from "@/src/DTOs/responseDTO";
import { TaskDTO } from "@/src/DTOs/taskDTO";
import axios, { AxiosError } from "axios";

export const createTask = async (task: TaskDTO): Promise<ResponseObject<TaskDTO>> => {
    try {
        console.log("Task to create: ", task);
        
        const response: TaskDTO = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tasks/create`, task);
        console.log("Created Task: ", response);
        
        return {
            success: true,
            data: response,
        };

    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            return {
                success: false,
                data: error.response?.data?.error || error.message || "Error desconocido"
            };
        } else {
            return {
                success: false,
                data: {} as TaskDTO
            };
        }
    }
}