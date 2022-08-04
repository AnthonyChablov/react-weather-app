import Content1 from "./Content1"
import Content2 from "./Content2"
import Content3 from "./Content3"

import Divider from "../utils/Divider"
import Taskbar from "./Taskbar"
import ErrorMessage from './ErrorMessage';

const Hero = ({
  // content1 props
  pressure, humidity, speed,
  //content2 props
  city,country,weather,imageId,
  date,time,
  //content3 props
  minTemp,maxTemp,
  //taskbar
  temp, currentDayMonthYear,daysOfWeek, sevenDayWeather, sevenDayImgId
  
}) => {
  return (
    <section className="display">
        <div className="container">
            <ErrorMessage
                  // if below xxx pixels
            />
          <div className="wrapper">
            
            <Content1 
              pressure={pressure} 
              humidity={humidity}
              speed={speed}
            />
            
            <Divider/>

            <Content2 
              city = {city}
              country={country}
              weather = {weather}
              imageId={imageId}
              date={date}
            />

            <Divider/>

            <Content3
              minTemp={minTemp}
              maxTemp={maxTemp}
              time = {time}
            />
          </div>
          <div>
              <Taskbar 
                temp={temp} 
                currentDayMonthYear={currentDayMonthYear}
                daysOfWeek={daysOfWeek}

                sevenDayWeather={sevenDayWeather}
                sevenDayImgId={sevenDayImgId}
              />
          
          </div>
        </div>
    </section>
  )
}

export default Hero