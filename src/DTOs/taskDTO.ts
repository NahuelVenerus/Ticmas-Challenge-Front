export interface TaskDTO {
    id?: number,
    title: string,
    description: string,
    isArchived: boolean,
    isCompleted: boolean
    completionDate?: Date,
    userId: number
}

export interface FormTaskDTO {
    title: string,
    description: string,
}

export interface ListTaskDTO {
    title: string,
    completionDate: string
}
