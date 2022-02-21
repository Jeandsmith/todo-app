import React, { useState } from "react";
import "./App.css";
import TodoItem from "./TodoItem/TodoItem";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<Array<React.ReactElement>>([]);

  return (
    <div className="App">
      <div id="todo-container">
        <header>
          <h1 id="todo-header">todo</h1>
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="input-field">
            <label htmlFor="todo-item">
              <input
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                type="text"
                name="todo-item"
                placeholder="Type item name"
              />
            </label>
          </div>
        </form>

        <div id="todo-item-container">{todos}</div>

        <footer id="todo-footer">
          <div className="buttons">
            <button
              id="todo-btn"
              onClick={() => {
                if (value === "") return;
                setTodos([
                  ...todos,
                  <TodoItem key={todos.length} text={value} />,
                ]);

                setValue("");
              }}
              className="submit"
            >
              submit
            </button>
            <button id="todo-btn" className="cancel">
              cancel
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
