import './reminder.css'

function Reminder(tasks) {
    return(
       <div className="reminder-div">
        <div className="reminder-title"><span style={{ color: "red" }}>Reminder:</span> Today's Tasks</div>
        <hr></hr>
        <div className="reminder-box">
            {tasks.tasks.map((task) => {
                if (new Date().toLocaleDateString() === new Date(task.time).toLocaleDateString()) {
                return (
                <div className="reminder-task">
                    <div className="reminder-task-name">{task.name}: {task.time}</div>
                </div>
            )} else {
                return null;
            }}
            )}
        </div>
       </div>
    )
}

export default Reminder;