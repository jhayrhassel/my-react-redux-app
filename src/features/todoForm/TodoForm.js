import React, { useState } from "react";

const TodoForm = () => {

  const [todoText, setTodoText] = useState('');

  return (
    <div className="todo-div">
      <h1>What's on your mind today?</h1>
      <form className="todo-form">
        <input
          type="text"
          className="sample-input"
          // placeholder="What's on your mind today?"
          // value={newJournalEntry}
          // onChange={(e) => {
          //   setNewJournalEntry(e.target.value);
          // }}
          // aria-label="New journal entry"
        />
      </form>
    </div>
  );
};

export default TodoForm;