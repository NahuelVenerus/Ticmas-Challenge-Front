export interface TaskDTO {
    id?: number,
    title: string,
    description: string,
    isArchived: boolean,
    isCompleted: boolean
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
