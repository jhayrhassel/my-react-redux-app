import React from "react";
import "./App.css";
import BackgroundImage from "./features/backgroundImage/BackgroundImage";
import TodoForm from "./features/todo/TodoForm";
import PrevImgBtn from "./features/navigateBtn/PrevImgBtn";
import NextImgBtn from "./features/navigateBtn/NextImgBtn";
import TodoList from "./features/todo/TodoList";
import Quotes from "./features/quotes/Quotes";
import Weather from "./features/weather/Weather";

function App() {
  return (
    <div className="App">
      <BackgroundImage />
      <header>
        <Weather />
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
        <Quotes />
      </footer>
    </div>
  );
}

export default App;
