import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/tasksSlice';
import currentTaskReducer from './slices/currentTaskSlice';
import userSlice from './slices/userSlice'

export const store = configureStore({
  reducer: {
    currentTask: currentTaskReducer,
    tasks: tasksReducer,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
