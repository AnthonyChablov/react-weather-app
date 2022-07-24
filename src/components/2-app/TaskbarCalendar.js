
const TaskbarCalendar = ({date, temp , daysOfWeek, sevenDayWeather, sevenDayImgId}) => {
  return (
    <div className="taskbar__date">
          <p>{daysOfWeek}</p>
          <div className="taskbar__image">
              <img className="monday__image" src={sevenDayImgId} alt="cloudy"/>
          </div>
          <p>{sevenDayWeather}°C</p>
    </div>
  )
}

export default TaskbarCalendar