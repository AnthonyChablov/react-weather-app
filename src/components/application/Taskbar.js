import Divider2 from "../utils/Divider2"
import TaskbarMain from "./TaskbarMain"
import TaskbarCalendar from "./TaskbarCalendar"
const Taskbar = ({temp,currentDayMonthYear , daysOfWeek, sevenDayWeather, sevenDayImgId}) => {
  return (
    <footer className="taskbar add-animation">    
      <TaskbarMain temp={temp} time={currentDayMonthYear}/>
      <Divider2 className='add-animation'/>

        <TaskbarCalendar 
            daysOfWeek={daysOfWeek[0]} 
            temp='45°C' 
            sevenDayWeather={(Math.round((sevenDayWeather[1].temp.min +sevenDayWeather[1].temp.max)/2)-273)}
            sevenDayImgId ={sevenDayImgId[1]}
        />

        <TaskbarCalendar 
            daysOfWeek={daysOfWeek[1]} 
            temp='45°C' 
            sevenDayWeather={(Math.round((sevenDayWeather[2].temp.min +sevenDayWeather[2].temp.max)/2)-273)}
            sevenDayImgId={sevenDayImgId[2]}
        />

        <TaskbarCalendar daysOfWeek={daysOfWeek[2]} temp='45°C' sevenDayWeather={(
        Math.round((sevenDayWeather[3].temp.min +sevenDayWeather[3].temp.max)/2)-273)}

        sevenDayImgId={sevenDayImgId[3]}
        />

        <TaskbarCalendar daysOfWeek={daysOfWeek[3]} temp='45°C' sevenDayWeather={(
        Math.round((sevenDayWeather[4].temp.min +sevenDayWeather[4].temp.max)/2)-273)}
        sevenDayImgId={sevenDayImgId[4]}
        />

        <TaskbarCalendar daysOfWeek={daysOfWeek[4]} temp='45°C' sevenDayWeather={(
        Math.round((sevenDayWeather[5].temp.min +sevenDayWeather[5].temp.max)/2)-273)}
        sevenDayImgId={sevenDayImgId[5]}
        />

        <TaskbarCalendar daysOfWeek={daysOfWeek[5]} temp='45°C' sevenDayWeather={(
        Math.round((sevenDayWeather[6].temp.min +sevenDayWeather[6].temp.max)/2)-273)}
        sevenDayImgId={sevenDayImgId[6]}
        />
      
        <TaskbarCalendar daysOfWeek={daysOfWeek[6]} temp='45°C' sevenDayWeather={(
        Math.round((sevenDayWeather[7].temp.min +sevenDayWeather[7].temp.max)/2)-273)}
        sevenDayImgId={sevenDayImgId[7]}
        />
    </footer>
  )
}

export default Taskbar



/* <div class=" taskbar__date">
          <p>MON</p>
          <div className="taskbar__image">
              <img className="monday__image" src={require("../assets/images/weatherstatus/sm/Cloud_64px.png")} alt="cloudy"/>
          </div>
          <p>45°C</p>
      </div>
      <div className="taskbar__tuesday taskbar__date">
          <p>TUE</p>
          <div className="taskbar__image">
              <img className="tuesday__image" src="images/weatherstatus/sm/Cloud_64px.png" alt="cloudy"/>
          </div>
          <p>45°C</p>
      </div>
      <div className="taskbar__wednesday taskbar__date">
          <p>WED</p>
          <div className="taskbar__image">
              <img className="wednesday__image" src="images/weatherstatus/sm/Cloud_64px.png" alt="cloudy"/>
          </div>
          <p>45°C</p>
      </div>
      <div className="taskbar__thursday taskbar__date">
          <p>THURS</p>
          <div className="taskbar__image">
              <img className="thursday__image" src="images/weatherstatus/sm/Cloud_64px.png" alt="cloudy"/>
          </div>
          <p>45°C</p>
      </div>
      <div className="taskbar__friday taskbar__date">
          <p>FRI</p>
          <div className="taskbar__image">
              <img className="friday__image" src="images/weatherstatus/sm/Cloud_64px.png" alt="cloudy"/>
          </div>
          <p>45°C</p>
      </div>
      <div className="taskbar__saturday taskbar__date">
          <p>SAT</p>
          <div className="taskbar__image">
              <img className="saturday__image" src="images/weatherstatus/sm/Cloud_64px.png" alt="cloudy"/>
          </div>
          <p>45°C</p>
      </div>

      <div className="taskbar__sunday taskbar__date">
          <p>SUN</p>
          <div className="taskbar__image">
              <img className="sunday__image" src="images/weatherstatus/sm/Cloud_64px.png" alt="cloudy" />
          </div>
          <p>45°C</p>
      </div> */