import { configureStore } from '@reduxjs/toolkit';
import dbReducer from './db-slice';

export const store = configureStore({
  reducer: {
    db: dbReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

