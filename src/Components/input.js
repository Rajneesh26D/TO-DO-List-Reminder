import { useState } from 'react'
import './input.css'
import { useSelector } from 'react-redux';


function Input({addList, toggleFormVisibility, isFormVisible}) {

  const { device } = useSelector((state) => state.windowSize);

    const [input, setInput] = useState('')
    const [details, setDetails] = useState('')
    const [deadline, setDeadline] = useState('')
    const [charCount, setCharCount] = useState(0);

    const toggleVisibility = () => {
        toggleFormVisibility(isFormVisible)
    }

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
          const reminder = document.querySelector('.reminder-div')
          reminder.style.transition = "margin 1s"
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
              onChange={handleInputChange} // Use the handleInputChange function
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

export default Input;