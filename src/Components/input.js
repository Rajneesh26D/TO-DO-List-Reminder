import { useState } from "react";
import "./input.css";
import { useSelector } from "react-redux";

function Input({ addList, toggleFormVisibility, isFormVisible }) {
  // Get device information from Redux store
  const { device } = useSelector((state) => state.windowSize);
// State to manage input fields and character count
  const [input, setInput] = useState("");
  const [details, setDetails] = useState("");
  const [deadline, setDeadline] = useState("");
  const [charCount, setCharCount] = useState(0);
// Function to toggle the visibility of the form
  const toggleVisibility = () => {
    toggleFormVisibility(isFormVisible);
  };
// Handler for input changes (task name)
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    setCharCount(inputValue.length);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addList(input, details, deadline);
        setInput("");
        setDeadline("");
        setDetails("");
        toggleVisibility();
        const reminder = document.querySelector(".reminder-div");
        if (reminder.classList.contains("mobile")) {
          reminder.style.margin = "35px 100px 150px 100px";
        } else {
          reminder.style.margin = "200px 100px 25px 100px";
        }
        reminder.style.transition = "margin 1s";
      }}
      className={`input-div ${device} ${isFormVisible ? "" : "hidden"}`}
    >
      <div>
        <div className="input-task-name">
          <p className={`task-header ${device}`}>Task Name:</p>
          <input
            type="text"
            placeholder="Enter task name"
            maxLength={20}
            value={input}
            onChange={handleInputChange}
            required
          />
          <div className="char-count">{charCount}/20</div>
        </div>

        <div className="input-details">
          <p className={`task-header ${device}`}>Details:</p>
          <input
            type="text"
            placeholder="Enter Detail"
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
            required
          />
        </div>
        <div className="input-time">
          <p className={`task-header ${device}`}>DeadLine:</p>
          <input
            type="date"
            placeholder="Enter DeadLine"
            value={deadline}
            onChange={(e) => {
              setDeadline(e.target.value);
            }}
            required
          />
        </div>
        <button type="submit" className={`input-button ${device}`}>
          Enter
        </button>
      </div>
    </form>
  );
}

export default Input;
