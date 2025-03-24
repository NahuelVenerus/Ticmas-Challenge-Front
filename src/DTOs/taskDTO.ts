export interface ListTaskDTO {
    title: string,
    completionDate: string
}

export interface CreateTaskDTO {
    title: string,
    description: string,
}

export interface EditTaskDTO {
    title: string,
    description: string,
    isArchived: boolean,
    isCompleted: boolean
    completionDate?: Date

}