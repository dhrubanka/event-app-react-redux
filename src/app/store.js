import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/profile/profileSlice';
import eventReducer from '../features/event/eventSlice'

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    event: eventReducer
  },
});
