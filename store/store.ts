import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/tasksSlice';
import currentTaskReducer from './slices/currentTaskSlice';

export const store = configureStore({
  reducer: {
    currentTask: currentTaskReducer,
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
