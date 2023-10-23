import Input from "./Components/input";
import Main from "./Components/main";
import Reminder from "./Components/reminder";
import './App.css'

function App() {
  return (
    <div className="App">
      <Main/>
      <div className="right-side"> 
      <Reminder/>
      <Input/>
      </div>
      
    </div>
  );
}

export default App;
