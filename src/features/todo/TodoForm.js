import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoFormSlice";


const TodoForm = () => {
  const [todoValue, setTodoValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      todo: todoValue,
      isDone: false
    }

    dispatch(addTodo(newTodo));
    setTodoValue('');
  }

  return (
    <div className="todo-div">
      <h1>What's on your mind today?</h1>
      <form className="todo-form" onSubmit={onFormSubmit}>
        <input
          type="text"
          className="todo-input"
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default TodoForm;