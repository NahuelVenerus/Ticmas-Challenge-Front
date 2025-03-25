import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskDTO } from '@/src/DTOs/taskDTO';

interface TasksState {
    tasks: TaskDTO[];
}

const initialState: TasksState = {
    tasks: [],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<TaskDTO>) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id !== Number(action.payload));
        },
        updateTask: (state, action: PayloadAction<TaskDTO>) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }
        },
    },
});

export const { addTask, removeTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
