const Content = ({pressure, humidity, speed}) => {
  return (
    <section className='primary__info add-animation'>
        <div className="primary__header">
          <div className="header__img formatting">
            <img className='forecast-img add-animation-pin-drop' src={require("../../assets/images/Marker_64px.png")} alt="Forecast Icon"/>
            {/* <div className="pulseEffect"></div> */}
            
          </div>
          
          <h1 className='header__h1'>Weather Forecast</h1>
        </div>
        
        <div className='primary__content'>
          <div className="primary__pressure ">
              <div className="primary__pressure-icon icons ">
                  <img src={require("../../assets/images/Atmospheric Pressure-44 (1).png")} alt="Atmosphere Icon"/>
              </div>
              <p>Pressure: {pressure} hPa</p>
          </div>
          
          <div className="primary__humidity ">
            <div className="primary__humidity-icon icons">
              <img src={require("../../assets/images/Humidity_44px.png")} alt="Humidity"/>
            </div>
            <p>Humidity: <span className="">{humidity}%</span></p>
          </div>
          <div className="primary__windspeed row ">
              <div className=" primary__windspeed-icon icons">
                  <img src={require("../../assets/images/Wind Speed 98-102_44px.png")} alt="Wind Speed Icon"/>
              </div>
              <p>Wind Speed: {speed} m/s</p>
          </div>
        </div>


    </section>
  )
}

export default Content