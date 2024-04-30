import { createSlice } from "@reduxjs/toolkit";

export const todoFormSlice = createSlice({
  name: "todoForm",
  initialState: {
    todoList: [
      {
        todo: "Cook Food",
        isDone: false,
      },
      {
        todo: "Exercise",
        isDone: false,
      },
      {
        todo: "Drink Vitamins",
        isDone: false,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todoList.splice(action.payload, 1);
    },
    setIsDone: (state, action) => {
      state.todoList[action.payload].isDone =
        !state.todoList[action.payload].isDone;
    },
  },
});

export const selectTodoList = (state) => state.todoForm.todoList;

export const { addTodo, removeTodo, setIsDone } = todoFormSlice.actions;

export default todoFormSlice.reducer;
