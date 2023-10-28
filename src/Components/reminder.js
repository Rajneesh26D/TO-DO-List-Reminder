import { useSelector } from 'react-redux';
import './reminder.css'

function Reminder(tasks) {
    const { device } = useSelector((state) => state.windowSize);

    const todayTasks = tasks.tasks.filter(task => new Date().toLocaleDateString() === new Date(task.time).toLocaleDateString());

    return (
        <div className={`reminder-div ${device}`}>
            <div className={`reminder-title ${device}`}><span style={{ color: "#C0392B" }}>Reminder:</span> Today's Tasks</div>
            <hr></hr>

            <div className="reminder-box">
                {todayTasks.length > 0 ? (
                    todayTasks.map((task, index) => (
                        <div className="reminder-task" key={index}>
                            <div className="reminder-task-name">
                            <span className={`reminder-task-heading ${device}`}>{task.name}</span>
                            <span className={`reminder-task-deadline ${device}`}>{task.time}</span>
                                </div>
                        </div>
                    ))
                ) : (
                    <div className={`empty-list-message-reminder ${device}`}>You're all set. No tasks for today.</div>
                )}
            </div>
        </div>
    )
}

export default Reminder;
