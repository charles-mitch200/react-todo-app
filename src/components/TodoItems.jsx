import "./CSS/TodoItems.css";
import tick from "./Assets/check.png";
import not_tick from "./Assets/radio.png";
import cross from "./Assets/close.png";

const TodoItems = ({ no, display, text, setTodos }) => {
  // function to delete todo
  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
  };

  // function to add and remove the line-through
  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data.forEach((item) => {
      if (item.no === no) {
        if (item.display === "") {
          item.display = "line-through";
        } else {
          item.display = "";
        }
      }
    });
    setTodos(data);
  };

  return (
    <div className="todoitems">
      <div
        className={`todoitems-container ${display}`}
        onClick={() => {
          toggle(no);
        }}
      >
        {display === "" ? (
          <img src={not_tick} alt="" />
        ) : (
          <img src={tick} alt="" />
        )}
        <div className="todoitems-text">{text}</div>
      </div>
      <img
        className="todo-cross"
        onClick={() => {
          deleteTodo(no);
        }}
        src={cross}
        alt=""
      />
    </div>
  );
};

export default TodoItems;
