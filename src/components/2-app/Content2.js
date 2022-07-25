import Button from "../utils/Button"
import Image from "./Image"

const Content2 = ({city, country,weather, imageId, date}) => {
  return (
    <section className="secondary__info">
        <h1 className="secondary__header">{city}, {country}</h1>
        
        <Button className="secondary__btn" action='Change Location' />
        
        <div className="secondary__image">
            <Image imageId={imageId}/>
        </div>
        <div className="secondary__text">
            <p>
                {
                    weather
                    .toLowerCase()
                    .split(' ')
                    .map(word => word
                        .charAt(0).toUpperCase() + 
                        word.slice(1)).join(' ')
                }
            </p>
            <div className="secondary__flex">
                <p className="secondary__date">Last updated: {date}</p>
                <a href="">
                <div className="secondary__img">
                    <img src={require("../../assets/images/Refresh_15px.png")} alt="Refresh Icon"/>
                </div>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Content2


//<img className="location__img" src={require("../../assets/images/weatherstatus/lg/Cloud_100px.png")} alt="Weather Status Icon"/>