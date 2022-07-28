import DividerBot from "../utils/DividerBot"

const Content3 = ({minTemp, maxTemp,time}) => {
  return (
    
    <section className="tertiary__info add-animation">
        <h1 className="tertiary__header ">{time}</h1>
        <p>Min. Temp.</p>
    
        <div className="tertiary__img tertiary__border">
            <p className="min-temp-insert ">{Math.round(minTemp-273)}°C</p>
            <div className="min-temp-img">
                <img src={require("../../assets/images/thermometer/Temperature_32px.png")} alt="thermometer"/>
            </div> 
        </div>
        
        <DividerBot className='add-animation'/>
        
        <p>Max. Temp</p>
        <div className="tertiary__img ">
            <p className="min-temp-insert ">{Math.round(maxTemp-273)}°C</p>
            <div className="min-temp-img">
                <img src={require("../../assets/images/thermometer/Temperature_32px.png")} alt="thermometer"/>
            </div> 
        </div>
    </section>
  )
}

export default Content3