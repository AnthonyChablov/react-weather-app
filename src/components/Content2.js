import Button from "./utils/Button"

const Content2 = ({}) => {
  return (
    <section className="secondary__info">
        <h1 className="secondary__header">Toronto, CA</h1>
        
        <Button action='Change Location' />
        
        <div className="secondary__image">
            <img className="location__img" src={require("../assets/images/weatherstatus/lg/Cloud_100px.png")} alt="Weather Status Icon"/>
        </div>
        <div className="secondary__text">
            <p>Mostly Cloudy</p>
            <div className="secondary__flex">
                <p className="secondary__date">Last updated: Tuesday, September, 2022</p>
                <div className="secondary__img">
                    <img src={require("../assets/images/Refresh_15px.png")} alt="Refresh Icon"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Content2