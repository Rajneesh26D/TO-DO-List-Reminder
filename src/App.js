// Import necessary components and styles
import Input from "./Components/input";
import Main from "./Components/main";
import Reminder from "./Components/reminder";
import "./App.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Function to get items from local storage
const getLocalItems = () => {
  let list = localStorage.getItem("tasks");
  console.log(list);

  if (list) {
    return JSON.parse(localStorage.getItem("tasks"));
  } else {
    return [];
  }
};

function App() {
    // Get device information from Redux store
  const { device } = useSelector((state) => state.windowSize);

  // State for controlling form visibility
  const [isFormVisible, setIsFormVisible] = useState(false);

    // Function to toggle form visibility
  const toggleFormVisibility = (isFormVisible) => {
    setIsFormVisible(!isFormVisible);
        // Animate the reminder div's margin
    const reminder = document.querySelector(".reminder-div");
    reminder.style.margin = "25px 100px 25px 100px";
    reminder.style.transition = "margin 1s";
  };

    // Function to delete a list item by key
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo]; //making a new ListTodo to store listtodo item and then deleting the specified item using the splice method
    newListTodo.splice(key, 1); //splicing method to remove items form newListTodo array
    // Updating the list after deleting the item
    setListTodo([...newListTodo]);
  };

    // State to store the list of tasks
  const [listTodo, setListTodo] = useState(getLocalItems());
    // Function to add a new task to the list
  let addList = (input, details, deadline) => {
    let newTask = {
      name: input,
      details: details,
      time: deadline,
    };
    setListTodo([...listTodo, newTask]);    // Add the new task to the list
  };

    // Store the list of tasks in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(listTodo));
  }, [listTodo]);

  return (
    <div className={`App ${device}`}>
      <Main
        task={listTodo}
        toggleFormVisibility={toggleFormVisibility}
        isFormVisible={isFormVisible}
        deleteTask={deleteListItem}
      />
      <div className={`right-side  ${device}`}>
        <Reminder tasks={listTodo} />
        <Input
          addList={addList}
          toggleFormVisibility={toggleFormVisibility}
          isFormVisible={isFormVisible}
        />
      </div>
    </div>
  );
}

export default App;
