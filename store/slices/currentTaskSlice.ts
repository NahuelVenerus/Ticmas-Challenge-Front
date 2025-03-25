import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskDTO } from '@/src/DTOs/taskDTO';

interface CurrentTaskState {
  currentTask: TaskDTO | null;
}

const defaultTask: TaskDTO = {
  id: 0,
  title: "",
  description: "",
  isArchived: false,
  isCompleted: false,
  completionDate: undefined,
  userId: 0
}

const initialState: CurrentTaskState = {
  currentTask: defaultTask
};

const currentTaskSlice = createSlice({
  name: 'currentTask',
  initialState,
  reducers: {
    setCurrentTask: (state, action: PayloadAction<TaskDTO | null>) => {
      state.currentTask = action.payload;
    },
    clearCurrentTask: (state) => {
      state.currentTask = defaultTask;
    },
  },
});

export const { setCurrentTask, clearCurrentTask } = currentTaskSlice.actions;
export default currentTaskSlice.reducer;
