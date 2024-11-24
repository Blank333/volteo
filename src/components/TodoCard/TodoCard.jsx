import React from "react";
import "./TodoCard.css";
import cloudy from "/cloudy.svg";
import add from "/Add.svg";
import TodoItem from "../TodoItem/TodoItem";

import dummyTodos from "../../dummyTodos";

function TodoCard() {
  const date = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return (
    <div className="todoCard card">
      <div>
        <div className="dailyStreamHeader">
          <h1>My Day</h1>
          <button>
            <img
              src={cloudy}
              alt="Weather Icon"
            />
          </button>
        </div>

        <p style={{ fontSize: "16px" }}>{formattedDate}</p>
      </div>

      <div className="todoList">
        {dummyTodos.map((item, index) => (
          <TodoItem
            key={index}
            todo={item.todo}
            assignedBy={item.assignedBy}
            isDone={item.isDone}
            isUrgent={item.isUrgent}
            dueDate={item.dueDate}
          />
        ))}
      </div>

      <div className="addTodo">
        <button>
          <img
            src={add}
            alt="Add Todo"
          />
        </button>
        <input
          className="addTodoInput"
          type="text"
          placeholder="Add a to-do reminder"
        />
      </div>
    </div>
  );
}

export default TodoCard;
