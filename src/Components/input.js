import { useState } from 'react'
import './input.css'


function Input({addList}) {
    const [input, setInput] = useState('')
    const [details, setDetails] = useState('')
    const [deadline, setDeadline] = useState('')

  
    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            addList(input,details, deadline)     //calling addList function
            setInput("")
            setDeadline("")
            setDetails("")
            }}
            className='input-div'>
        <div>
            <div className="input-task-name">
                <p className='task-header'>Task Name:</p>
                <input type="text" placeholder='Enter task name'
                value={input}
                onChange={e=>{
                    setInput(e.target.value)
                 }} required
                />
            </div>
            <div className="input-details">
                <p className='task-header'>Details:</p>
                <input type="text" placeholder='Enter Detail'
                value={details}
                onChange={e=>{
                    setDetails(e.target.value)
                 }} required
                />
            </div>
            <div className="input-time">
                <p className='task-header'>DeadLine:</p>
                <input type="text" placeholder='Enter DeadLine' 
                value={deadline}
                onChange={e=>{
                    setDeadline(e.target.value)
                 }} required
                />
            </div>
            <button type='submit' className='input-button'>Enter</button>
        </div>
        </form>
    )
}

export default Input;