import { useEffect, useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import "./main.css";
import { useSelector } from "react-redux";

function Main({ task, toggleFormVisibility, isFormVisible, deleteTask }) {
  // Get device information from Redux store
  const { device } = useSelector((state) => state.windowSize);
  // State to store the current date and time
  var [date, setDate] = useState(new Date());
  // Update the date and time every second
  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
        // Cleanup the timer when the component unmounts
    return function cleanup() {
      clearInterval(timer);
    };
  });

    // Format the date and time to display
  const showTime = date.toLocaleDateString() + " " + date.toLocaleTimeString();

    // Function to toggle the visibility of the form for adding tasks
  const toggleVisibility = () => {
    toggleFormVisibility(isFormVisible);
  };

  return (
    <div className={`main-div ${device}`}>
      <div className={`title ${device}`}>To-do list</div>
      <br></br>
      <div className={`time-box ${device}`}>{showTime} </div>
      <div className={`task-bar ${device}`}>
        <button className="add-task-button" onClick={toggleVisibility}>
          Add Task +
        </button>
        <hr />
        {task.length === 0 ? (
          <div className={`empty-list-message-main ${device}`}>
            The list is empty. Please Add your tasks
          </div>
        ) : (
          <div className={`list ${device}`}>
            {task.map((task, index) => {
              return (
                <div className="task" key={index}>
                  <div className={`task-name ${device}`}>
                    <span className={`task-heading ${device}`}>
                      {task.name}
                    </span>
                    <span className={`task-deadline ${device}`}>
                      {task.time}&nbsp;
                      <button
                        className="icon-button"
                        onClick={() => deleteTask(index)}
                      >
                        <i className="fa fa-solid fa-trash icon-delete"></i>
                      </button>
                    </span>
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
