
const TaskbarCalendar = ({date, temp}) => {
  return (
    <div className="taskbar__date">
          <p>{date}</p>
          <div className="taskbar__image">
              <img className="monday__image" src={require("../assets/images/weatherstatus/sm/Cloud_64px.png")} alt="cloudy"/>
          </div>
          <p>{temp}</p>
    </div>
  )
}

export default TaskbarCalendar