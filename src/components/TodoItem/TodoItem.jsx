import React, { useState } from "react";
import "./TodoItem.css";
import options from "/more-horizontal.svg";

function TodoItem({
  todo,
  assignedBy,
  dueDate,
  isDone = false,
  isUrgent = false,
}) {
  const [checked, setChecked] = useState(isDone);

  let duenow = false;

  const calculateDueTime = (targetDate) => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      return "s";
    }

    // Convert the difference to days and hours
    const totalHours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(totalHours / 24);
    const hours = totalHours % 24;

    // Format the message
    if (days > 0) {
      return `${days} days`;
    }
    if (hours <= 2) {
      duenow = true;
    }
    return `${hours} hours`;
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  let dueBy = calculateDueTime(dueDate);
  return (
    <div className={isUrgent ? "urgent-border todoItem" : "todoItem"}>
      <button className="todoOptions">
        <img
          src={options}
          alt="Todo Options"
        />
      </button>

      <label class="custom-label">
        <input
          type="checkbox"
          className="todoCheckbox"
          checked={checked}
          onChange={handleCheck}
        />
        <svg
          class="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </label>
      <div>
        <p className={isUrgent ? "urgent" : ""}>
          <strong className={checked ? "striked" : ""}>{todo}</strong>
        </p>
        <p>
          Assigned by {assignedBy}
          <span hidden={checked}>
            {" | "}
            <span className={duenow ? "urgent" : ""}>Due in {dueBy}</span>
          </span>
        </p>
      </div>
    </div>
  );
}

export default TodoItem;
