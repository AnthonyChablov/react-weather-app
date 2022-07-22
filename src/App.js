import {useState, useEffect} from 'react'
import Hero from  './components/2-app/Hero';
import Modal from './components/modal/Modal';
import {BrowserRouter as Router, Switch } from 'react-router-dom';

//import seven day weather dummy data
import {SevenDayWeatherData} from './components/data/SevenDayWeatherData';
import {SingleDayWeatherData} from './components/data/SingleDayWeatherData';

// importing large images for dynamic insert
import sunImg from './assets/images/weatherstatus/lg/Sun_100px.png';
import cloudImg from "./assets/images/weatherstatus/lg/Cloud_100px.png";
import rainImg from "./assets/images/weatherstatus/lg/Rain_100px.png";
import snowImg from "./assets/images/weatherstatus/lg/Snow_100px.png";

// importing small images for dynamic insert

function App() {
  // HOOKS
  // Fetch Request #1
  const [weather, setWeather] = useState(SingleDayWeatherData);
  // Fetch Request #2
  const [sevenDayWeather, setSevenDayWeather]=useState(SevenDayWeatherData);
  const [loading, setLoading] = useState(false);
  // Change time dynamically
  const [time, setTime] = useState(`Loading...`);
  // clear form inputs of modal
  const [val,setVal] = useState();
  // Modal Enter City Name
  const [city, setCity]=useState('Toronto');
  // setting the order of days accoring to day of the week
  const [orderDays, setOrderDays] = useState(['MON', 'TUE','WED','THU','FRI','SAT','SUN']);

  useEffect(()=>{
    setInterval(()=>{
      setTime((getTime()));
    }, 1000);
  });

  useEffect(()=>{
    getWeather();
  }, []);

  useEffect(()=>{
    getSevenDayWeather();
  },[]);

  useEffect(()=>{
    setOrderDays(reOrderDays());
  }, []);

  /* Functions */
  // 1 Day Weather
  const fetchWeather = async()=>{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'fb0d758eb64076fcb554d7fdd7f7bd8a'}`);
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
  // 7 Day Weather
  const fetchSevenDayWeather = async()=>{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${weather.coord.lat}&lon=${weather.coord.lon}&appid=${'fb0d758eb64076fcb554d7fdd7f7bd8a'}`);
    if (!res.ok) {
      throw new Error('Error! Something went wrong!');
    }
    const data = await res.json();
    console.log(data);
    return data;
  }
  const getSevenDayWeather = async ()=>{
    setLoading(true);
    const weatherFromServer = await fetchSevenDayWeather();
    setSevenDayWeather(weatherFromServer);
    setLoading(false);
  }
  
  const getTime =  () => {
    let time = new Date();
    let newTime = time.toLocaleTimeString();
    return newTime;
  }

  // Dynamically Change Weather Image According To Weather
  let weatherOutput={
    'clear sky': sunImg,
    'few clouds':cloudImg,
    "scattered clouds":cloudImg,
    'broken clouds': cloudImg,
    'thunderstorm': cloudImg,
    'shower rain':rainImg,
    'light rain':rainImg,
    'moderate rain':rainImg,
    'rain':rainImg,
    'snow':snowImg,
    'mist':rainImg,
  }

  const getImageWeather = () => {
    return weatherOutput[weather.weather[0].description]
  }
  let imageId = getImageWeather();

  // Get current day month year
  let getMonthDayYear = ()=>{
    let date = new Date();
    let newDate = date.toDateString();
    return newDate;
  }
  let currentDayMonthYear = getMonthDayYear();

  let reOrderDays = ()=>{
    let numberDay = new Date();
    let arr1 = orderDays.filter((day, i)=> i >= numberDay.getDay());
    let arr2 = orderDays.filter((day, i)=> i < numberDay.getDay());
    return arr1.concat(arr2);
  }

  // Rendering
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
                // Content1 
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

                // Taskbar 
                temp = {weather.main.temp}
                currentDayMonthYear = {currentDayMonthYear}
                daysOfWeek = {orderDays}

                sevenDayWeather = {sevenDayWeather.daily}
              
              
              />
              <Modal value={val} changeCity={()=>setCity()}/>
            </main>
          ):( // Loading Page
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