import Content1 from "./Content1"
import Content2 from "./Content2"
import Content3 from "./Content3"

import Divider from "./utils/Divider"
import Taskbar from "./Taskbar"


const Hero = ({pressure, humidity, speed}) => {
  return (
    <section className="display">
        <div className="container">
          <div className="wrapper">
            
            <Content1 
              pressure={pressure} 
              humidity={humidity}
              speed={speed}
            />
            <Divider/>
            <Content2 />
            <Divider/>
            <Content3/>
            
            
          </div>
          <div>
              <Taskbar/>
              
          </div>
        </div>
    </section>
  )
}

export default Hero