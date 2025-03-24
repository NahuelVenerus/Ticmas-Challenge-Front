import { TaskDTO } from '@/src/DTOs/taskDTO';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface TaskState {
  tasks: TaskDTO[];
  currentTask: TaskDTO | null;
}

const initialState: TaskState = {
  tasks: [],
  currentTask: null,
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskDTO>) => {
      state.tasks.push(action.payload);
    },
    setCurrentTask: (state, action: PayloadAction<TaskDTO | null>) => {
      state.currentTask = action.payload;
    },
    clearCurrentTask: (state) => {
      state.currentTask = null;
    },
  },
});

export const { addTask, setCurrentTask, clearCurrentTask } = taskSlice.actions;
export default taskSlice.reducer;
