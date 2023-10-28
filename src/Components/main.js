import { useEffect, useState } from "react";
import "font-awesome/css/font-awesome.min.css"
// import '@fortawesome/fontawesome-svg-core/styles.css'
import "./main.css";
import { useSelector } from "react-redux";

function Main({ task, toggleFormVisibility, isFormVisible, deleteTask }) {

  const { device } = useSelector((state) => state.windowSize);


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

  // const iconStyle = {
  //   color: '#183153',
  // };

  return (
    <div className={`main-div ${device}`}>
      <div className={`title ${device}`}>To-do list</div>
      <br></br>
      <div className={`time-box ${device}`}>{showTime} </div>
      <div className={`task-bar ${device}`}>
        <button className="add-task-button" onClick={toggleVisibility}>
          Add Task +
        </button>
        <hr/>
        {task.length === 0 ? (
          <div className={`empty-list-message-main ${device}`}>The list is empty. Please Add your tasks</div>
        ) : (
        <div className={`list ${device}`}>
          {task.map((task, index) => {
            return (
              <div className="task" key={index}>
                <div className={`task-name ${device}`}>
                  <span className={`task-heading ${device}`}>{task.name}</span>
                  <span className={`task-deadline ${device}`}>
                    {task.time}&nbsp;
                    <button className="icon-button" onClick={() => deleteTask(index)}>
                    <i className="fa fa-solid fa-trash icon-delete"></i>
                    </button>
                    </span>
                  {/* <span className="icons">
                    
                  </span> */}
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
