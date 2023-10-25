import { useEffect, useState } from "react";
import "./main.css";

function Main(task) {
  
  var [date, setDate] = useState(new Date());

  // const tasks = [
  //     {
  //         name: "Task 1",
  //         time: "10:00 AM"
  //     },
  //     {
  //         name: "Task 2",
  //         time: "11:00 AM"
  //     },
  //     {
  //         name: "Task 3",
  //         time: "12:00 PM"
  //     },
  //     {
  //         name: "Task 4",
  //         time: "01:00 PM"
  //     },
  //     {
  //         name: "Task 5",
  //         time: "02:00 PM"
  //     },
  //     {
  //         name: "Task 6",
  //         time: "03:00 PM"
  //     },
  //     {
  //         name: "Task 7",
  //         time: "04:00 PM"
  //     },
  //     {
  //         name: "Task 8",
  //         time: "05:00 PM"
  //     },
  //     {
  //         name: "Task 9",
  //         time: "06:00 PM"
  //     },
  //     {
  //         name: "Task 10",
  //         time: "07:00 PM"
  //     },
  //     {
  //         name: "Task 11",
  //         time: "08:00 PM"
  //     },
  //     {
  //         name: "Task 12",
  //         time: "09:00 PM"
  //     },
  //     {
  //         name: "Task 13",
  //         time: "10:00 PM"
  //     },
  //     {
  //         name: "Task 14",
  //         time: "11:00 PM"
  //     },
  //     {
  //         name: "Task 15",
  //         time: "12:00 AM"
  //     }
  // ]
  // task = tasks;

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  const showTime = date.toLocaleDateString() + " " + date.toLocaleTimeString();

  return (
    <div className="main-div">
      <div className="title">To-do list</div>
      <br></br>
      <div className="time-box">{showTime} </div>
      <div className="task-bar">
        <button className="add-task-button">Add Task +</button>
        <hr></hr>
        <div className="list">
          {task.task.map((task) => {
            return (
              <div className="task">
                <div className="task-name">
                  {task.name}: {task.details}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;
