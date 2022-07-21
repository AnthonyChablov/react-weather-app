const TaskbarMain = ({temp, time}) => {
  return (
    <div className="taskbar__info">
          <p className="taskbar__temperature">{Math.round(temp-273)}°C</p>
          <p className="taskbar__date">{time}</p> 
      </div>
  )
}

export default TaskbarMain