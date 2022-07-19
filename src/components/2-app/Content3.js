import DividerBot from "../utils/DividerBot"

const Content3 = () => {
  return (
    
    <section className="tertiary__info">
        <h1 className="tertiary__header">17:33 PM</h1>
        <p>Min. Temp.</p>
    
        <div className="tertiary__img tertiary__border">
            <p className="min-temp-insert ">45°C</p>
            <div className="min-temp-img">
                <img src={require("../../assets/images/thermometer/Temperature_32px.png")} alt="thermometer"/>
            </div> 
        </div>
        
        <DividerBot />
        
        <p>Max. Temp</p>
        <div className="tertiary__img ">
            <p className="min-temp-insert ">45°C</p>
            <div className="min-temp-img">
                <img src={require("../../assets/images/thermometer/Temperature_32px.png")} alt="thermometer"/>
            </div> 
        </div>
    </section>
  )
}

export default Content3