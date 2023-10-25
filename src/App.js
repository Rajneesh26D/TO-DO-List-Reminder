import Input from "./Components/input";
import Main from "./Components/main";
import Reminder from "./Components/reminder";
import './App.css'
import { useState } from "react";

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (input, details, deadline) => {
    let newTask = {
      name: input,
      details: details,
      time: deadline
    };
    setListTodo([...listTodo, newTask]);
  };
  const tasks = [
    {
      name: "Task 1",
      time: "10:00 AM"
    },
    {
      name: "Task 2",
      time: "11:00 AM"
    },
    {
      name: "Task 3",
      time: "12:00 PM"
    },
    {
      name: "Task 4",
      time: "01:00 PM"
    },
    {
      name: "Task 5",
      time: "02:00 PM"
    },
    {
      name: "Task 6",
      time: "03:00 PM"
    },
    {
      name: "Task 7",
      time: "04:00 PM"
    },
    {
      name: "Task 8",
      time: "05:00 PM"
    },
    {
      name: "Task 9",
      time: "06:00 PM"
    },
    {
      name: "Task 10",
      time: "07:00 PM"
    },
    {
      name: "Task 11",
      time: "08:00 PM"
    },
    {
      name: "Task 12",
      time: "09:00 PM"
    },
    {
      name: "Task 13",
      time: "10:00 PM"
    },
    {
      name: "Task 14",
      time: "11:00 PM"
    },
    {
      name: "Task 15",
      time: "12:00 AM"
    }
  ]
  return (
    <div className="App">
      <Main task={listTodo}/>
      <div className="right-side">
        <Reminder tasks={listTodo}/>
        <Input addList={addList}/>
      </div>
    </div>
  );
}

export default App;