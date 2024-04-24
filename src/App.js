import React from "react";
import "./App.css";
import BackgroundImage from "./features/backgroundImage/BackgroundImage";
import TodoForm from "./features/todo/TodoForm";
import PrevImgBtn from "./features/navigateBtn/PrevImgBtn";
import NextImgBtn from "./features/navigateBtn/NextImgBtn";
import TodoList from "./features/todo/TodoList";

function App() {

  return (
    <div className="App">
      <BackgroundImage />
      <header>
        <div className="weather"></div>
      </header>
      <main>
        <div className="main-container">
          <PrevImgBtn />
          <div className="todo-container">
            <TodoForm />
            <TodoList />
          </div>
          <NextImgBtn />
        </div>
      </main>
      <footer>
        <div style={{ height: "100px", backgroundColor: "blue" }}></div>
      </footer>
    </div>
  );
}

export default App;
