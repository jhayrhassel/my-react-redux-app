import { configureStore } from "@reduxjs/toolkit";
import backgroundImageSlice from "../features/backgroundImage/backgroundImageSlice";
import todoFormSlice from "../features/todo/todoFormSlice";
import quotesSlice from "../features/quotes/quotesSlice";
import weatherSlice from "../features/weather/weatherSlice";
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    backgroundImage: backgroundImageSlice,
    todoForm: todoFormSlice,
    quotes: quotesSlice,
    weather: weatherSlice
  },
});
