import { useEffect, useState } from "react";
import "./main.css";

function Main({ task, toggleFormVisibility, isFormVisible }) {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  const showTime = date.toLocaleDateString() + " " + date.toLocaleTimeString();

  const toggleVisibility = () => {
    toggleFormVisibility(isFormVisible);
  };

  return (
    <div className="main-div">
      <div className="title">To-do list</div>
      <br></br>
      <div className="time-box">{showTime} </div>
      <div className="task-bar">
        <button className="add-task-button" onClick={toggleVisibility}>
          Add Task +
        </button>
        <hr></hr>
        {task.length === 0 ? (
          <div className="empty-list-message">The list is empty. Please Add your tasks</div>
        ) : (
        <div className="list">
          {task.map((task) => {
            return (
              <div className="task">
                <div className="task-name">
                  <span className="task-heading">{task.name}</span>
                  <span className="task-deadline">{task.time}</span>
                </div>
                <div className="task-short">
                  
                  <span>{task.details}</span>
                </div>
            </div>
            );
          })}
        </div>
        )}
      </div>
    </div>
  );
}

export default Main;
