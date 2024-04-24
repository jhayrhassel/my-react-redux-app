import React from "react";
import { useSelector } from "react-redux";
import { selectTodoList } from "./todoFormSlice";
import Todo from "./Todo";

const TodoList = () => {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="todo-list">
      <ul className="todo-ul">
        {todoList.map(({ todo, isDone }, index) => (
          <Todo key={index} isDone={isDone} index={index}>
            {todo}
          </Todo>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
