import Divider2 from "../utils/Divider2"
import TaskbarMain from "./TaskbarMain"
import TaskbarCalendar from "./TaskbarCalendar"
const Taskbar = () => {
  return (
    <footer className="taskbar">    

      <TaskbarMain />
      <Divider2/>

      <TaskbarCalendar date='MON' temp='45°C'/>
      <TaskbarCalendar date='TUE' temp='45°C'/>
      <TaskbarCalendar date='WED' temp='45°C'/>
      <TaskbarCalendar date='THURS' temp='45°C'/>
      <TaskbarCalendar date='FRI' temp='45°C'/>
      <TaskbarCalendar date='SAT' temp='45°C'/>
      <TaskbarCalendar date='SUN' temp='45°C'/>
      
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