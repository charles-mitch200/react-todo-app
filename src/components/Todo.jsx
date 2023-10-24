import { useRef } from "react";
import "./CSS/Todo.css";
import { useState } from "react";
import { useEffect } from "react";
import TodoItems from "./TodoItems";

let count = 0;
const Todo = () => {
  // useState and useRef hooks
  const inputRef = useRef(null);
  const [todos, setTodos] = useState([]);

  // function to add todos
  const add = () => {
    setTodos([
      ...todos,
      { no: count++, text: inputRef.current.value, display: "" },
    ]);
    inputRef.current.value = "";
    localStorage.setItem("todo_items", count);
  };

  // render todos on the page once the page loads
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todos_count");
  }, []);

  // console log the todos whenever there's an update in todos and store them in local storage
  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
  }, [todos]);

  return (
    <div className="todo">
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add task"
          className="todo-input"
        />
        <div
          onClick={() => {
            add();
          }}
          className="todo-add-btn"
        >
          ADD
        </div>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => {
          return (
            <TodoItems
              key={index}
              setTodos={setTodos}
              no={todo.no}
              display={todo.display}
              text={todo.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
