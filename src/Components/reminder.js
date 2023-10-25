import './reminder.css'

function Reminder(tasks) {
    return(
       <div className="reminder-div">
        <div className="reminder-title"><span style={{ color: "red" }}>Reminder:</span> Today's Tasks</div>
        <hr></hr>
        <div className="task-box">
            {tasks.tasks.map((task) => (
                <div className="task">
                    <div className="task-name">{task.name}: {task.time}</div>
                </div>
            ))}
        </div>
       </div>
    )
}

export default Reminder;