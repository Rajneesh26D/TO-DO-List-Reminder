import './input.css'


function Input() {
    return(
       <div className="input-div">
        <div className="task-name">
            <p className='task-header'>Task Name:</p>
            <input type="text" placeholder='Enter task name' />
            </div>


        <div className="details">
             <p className='task-header'>details:</p>
             <input type="text" placeholder='Enter Detail' />
             </div>
        <div className="Time">
             <p className='task-header'>DeadLine:</p>
             <input type="text" placeholder='Enter DeadLine' />
             </div>
       </div>
    )
}

export default Input;