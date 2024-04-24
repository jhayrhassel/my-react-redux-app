import React from "react";
import { removeTodo, setIsDone } from "./todoFormSlice";
import { useDispatch } from "react-redux";

const Todo = ({ children, isDone, index }) => {
  const dispatch = useDispatch();
  const todoBGColor = ["red", "yellow", "green", "blue", "orange"];

  return (
    <li className="todo-li">
      {console.log('isDone: ' + isDone)}
      <div
        className={
          (isDone ? `done` : (todoBGColor[index % todoBGColor.length])) + `-todo per-todo-container`
        }
      >
        <div className="todo-btns">
          <button
            className="remove"
            onClick={() => {
              dispatch(removeTodo(index));
            }}
          >
            Remove
          </button>
          <button
            className="done"
            onClick={() => {
              dispatch(setIsDone(index));
            }}
          >
            {isDone ? `Redo` : `Done`}
          </button>
        </div>
        {children}
      </div>
    </li>
  );
};

export default Todo;
