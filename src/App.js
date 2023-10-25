import Input from "./Components/input";
import Main from "./Components/main";
import Reminder from "./Components/reminder";
import './App.css'
import { useState } from "react";

function App() {

  const [isFormVisible, setIsFormVisible] = useState(false);
  const toggleFormVisibility = (isFormVisible) => {
    setIsFormVisible(!isFormVisible);
    // console.log(isFormVisible)
  };



  const [listTodo, setListTodo] = useState([]);
  let addList = (input, details, deadline) => {
    let newTask = {
      name: input,
      details: details,
      time: deadline
    };
    setListTodo([...listTodo, newTask]);
  };
  
  return (
    <div className="App">
      <Main task={listTodo} toggleFormVisibility={toggleFormVisibility} isFormVisible={isFormVisible}/>
      <div className="right-side">
        <Reminder tasks={listTodo}/>
        <Input addList={addList} toggleFormVisibility={toggleFormVisibility} isFormVisible={isFormVisible}/>
      </div>
    </div>
  );
}

export default App;