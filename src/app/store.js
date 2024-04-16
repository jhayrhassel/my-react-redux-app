import { configureStore } from '@reduxjs/toolkit';
import backgroundImageSlice from '../features/backgroundImage/BackgroundImageSlice';
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    backgroundImage: backgroundImageSlice,
  },
});
