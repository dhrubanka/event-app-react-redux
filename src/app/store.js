import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import profileReducer from '../features/profile/profileSlice';
import eventReducer from '../features/event/eventSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    profile: profileReducer,
    event: eventReducer
  },
});
