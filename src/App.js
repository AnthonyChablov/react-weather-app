import {useState, useEffect} from 'react'
import Hero from  './components/2-app/Hero';
import Modal from './components/modal/Modal';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// importing large images for dynamic insert
import sunImg from './assets/images/weatherstatus/lg/Sun_100px.png'
import cloudImg from "./assets/images/weatherstatus/lg/Cloud_100px.png"
import rainImg from "./assets/images/weatherstatus/lg/Rain_100px.png"
import snowImg from "./assets/images/weatherstatus/lg/Snow_100px.png"

// importing small images for dynamic insert

function App() {
  // HOOKS
  // Fetch Request #1
  const [weather, setWeather] = useState({
      coord: {
        lon: -79.4163,
        lat: 43.7001
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: 'clear sky',
          icon: "03d"
        }
      ],
      base: "stations",
      main: {
        temp: 304.15,
        feels_like: 308,
        temp_min: 300.64,
        temp_max: 305.46,
        pressure: 1008,
        humidity: 60
      },
      visibility: 10000,
      wind: {
        speed: 3.6,
        deg: 290,
        gust: 9.26
      },
      clouds: {
        all: 40
      },
      dt: 1658248348,
      sys: {
        type: 2,
        id: 2043365,
        country: "CA",
        sunrise: 1658224395,
        sunset: 1658278457
      },
      timezone: -14400,
      id: 6167865,
      name: "Toronto",
      cod: 200
  });
  
  const [loading, setLoading] = useState(false);

  // change time dynamically
  const [time, setTime] = useState(`Loading...`);
  useEffect(()=>{
    setInterval(()=>{
      setTime((getTime()));
    }, 1000);
  });

  // ckear form inputs of modal
  const [val,setVal] = useState();

  useEffect(()=>{
    getWeather();
  }, []);

  /* Functions */
  const fetchWeather = async()=>{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${'Toronto'}&appid=${'fb0d758eb64076fcb554d7fdd7f7bd8a'}`);
    if (!res.ok) {
      throw new Error('Error! Something went wrong!');
    }
    const data = await res.json();
    return data;
  }

  const getWeather = async ()=>{
    setLoading(true);
    const weatherFromServer = await fetchWeather();
    setWeather(weatherFromServer);
    setLoading(false);
  }
  const getTime =  () => {
    let time = new Date();
    let newTime = time.toLocaleTimeString();
    return newTime;
  }

  // dynamically change weather image according to weather
  let weatherOutput={
    'clear sky': sunImg,
    'few clouds':cloudImg,
    "scattered clouds":cloudImg,
    'broken clouds': cloudImg,
    'thunderstorm': cloudImg,
    'shower rain':rainImg,
    'rain':rainImg,
    'snow':snowImg,
    'mist':rainImg,
  }

  const getImageWeather = ()=>{
    return weatherOutput[weather.weather[0].description]
  }
  let imageId = getImageWeather();

  // get current day month year
  let getMonthDayYear = ()=>{
    let date = new Date();
    let newDate = date.toDateString();
    return newDate;
  }
  let currentDayMonthYear = getMonthDayYear();
 



  //rendering
  if (loading){
    return (<main className='display'>Loading...</main>);
  }
  return (
    <Router>
        <Switch>
          { !loading 
          ? ( 
            <main>
              <Hero 
                //Content1
                pressure={weather.main.pressure} 
                humidity={weather.main.humidity}
                speed={weather.wind.speed} 

                // Content2 
                city = {weather.name}
                country ={weather.sys.country} 
                weather = {weather.weather[0].description}
                  // passing in image of weather using state of image
                imageId={imageId}
                  // date object
                date = {currentDayMonthYear}

                // Content3 
                minTemp = {weather.main.temp_min}
                maxTemp = {weather.main.temp_max}
                time = {time}
                  //Taskbar
                temp = {weather.main.temp}
                currentDayMonthYear = {currentDayMonthYear}
              />
              <Modal value={val}/>
            </main>
          ):( // loading paage
            <main>Loading...</main>
          )}
        </Switch>
    </Router>
  );
}

export default App;

/* 
StrictMode renders components twice (on dev but not production) in order to detect any problems with your code and warn you about them (which can be quite useful).

If you have StrictMode enabled in your app but don't remember enabling it, it might be because you used create-react-app or similar to create your app initially, which automatically enables StrictMode by default.


the build version should ususally render once 
*/