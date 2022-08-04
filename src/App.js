import {useState, useEffect} from 'react'
import Hero from  './components/application/Hero';
import Modal from './components/modal/Modal';


//import seven day weather dummy data
import {SevenDayWeatherData} from './components/data/SevenDayWeatherData';
import {SingleDayWeatherData} from './components/data/SingleDayWeatherData';
import {newCountryNames} from './components/data/CountryData'

// importing large images for dynamic insert
import sunImg from   './assets/images/weatherstatus/lg/Sun_100px.png';
import cloudImg from "./assets/images/weatherstatus/lg/Cloud_100px.png";
import rainImg from  "./assets/images/weatherstatus/lg/Rain_100px.png";
import snowImg from  "./assets/images/weatherstatus/lg/Snow_100px.png";

// importing small images for dynamic insert
import sunImgSm from   './assets/images/weatherstatus/sm/Sun_64px_3.png';
import cloudImgSm from "./assets/images/weatherstatus/sm/Cloud_64px.png";
import rainImgSm from  "./assets/images/weatherstatus/sm/Rain_64px_1.png";
import snowImgSm from  "./assets/images/weatherstatus/sm/Snow_64px.png";

//loading spinner
import Spinner from './components/utils/Spinner';

function App() {
  // HOOKS
  // Fetch Request #1
  const [weather, setWeather] = useState(SingleDayWeatherData);
  // Fetch Request #2
  const [sevenDayWeather, setSevenDayWeather]=useState(SevenDayWeatherData);
  const [loading, setLoading] = useState(false);
  // Change time dynamically
  const [time, setTime] = useState(`Loading...`);
  // Modal Enter City Name
  const [city, setCity]= useState('Toronto');
  // modal Enter Country Name
  const[country , setCountry] = useState('Canada');
  // setting the order of days accoring to day of the week
  const [orderDays, setOrderDays] = useState(['MON', 'TUE','WED','THU','FRI','SAT','SUN']);
  // form input value
  const [formInputCity , setFormInputCity] = useState('');
  const [formInputCountry, setFormInputCountry] = useState('');
  
  useEffect(()=>{ 
    if(time){
      const interval = setInterval(()=>{
        setTime((getCurrentTime(weather.timezone)));
      }, 1000);
      return () =>{
        clearInterval(interval);
      };
    }
  }, [time]);

  useEffect(()=>{
    console.log('City and/or Country changed, getting weather.');
    getWeather();
  }, [city, country]);
  
  useEffect(()=>{
    getSevenDayWeather();
  },[weather]);

  useEffect(()=>{
    let orderedDays = reOrderDays()
    setOrderDays(orderedDays);
  }, [orderDays]);

  // loading spinner 
  useEffect (()=>{
    const timer = setTimeout(()=>{
      console.log('delayed for 5 seconds');
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  /* Functions */
  // 1 Day Weather
  const fetchWeather = async()=>{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${
      city},${newCountryNames[country.toUpperCase()]}&appid=${'fb0d758eb64076fcb554d7fdd7f7bd8a'}`);
    if (!res.ok) {
      throw new Error('Error! Something went wrong!');
    }
    const data = await res.json();
    console.log(data);
    return data;
  }
  
  const getWeather = async ()=>{
    setLoading(true);
    const weatherFromServer =  await fetchWeather();
    setWeather(weatherFromServer);
    setLoading(false);
  }
  // 7 Day Weather
  const fetchSevenDayWeather = async()=>{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${
      weather.coord.lat}&lon=${weather.coord.lon}&appid=${'fb0d758eb64076fcb554d7fdd7f7bd8a'}`);
    if (!res.ok) {
      throw new Error('Error! Something went wrong!');
    }
    const data = await res.json();
    console.log(data);
    return data;
  }
  const getSevenDayWeather = async ()=>{
    setLoading(true);
    const sevenWeatherFromServer = await fetchSevenDayWeather();
    setSevenDayWeather(sevenWeatherFromServer);
    setLoading(false);
  }
  const getCurrentTime = (offset) => {
    let time = new Date();
    let utc = time.getTime() + (time.getTimezoneOffset() * 60000);
    let newTime = new Date(utc + (3600000 * (offset / 3600)));
    return newTime.toLocaleTimeString();
  }

  // Dynamically Change Weather Image According To Weather
  let weatherOutput={
    'Clouds': cloudImg,
    'Rain':rainImg,
    'Snow':snowImg,
    'Clear':sunImg,
    'Thunderstorm':rainImg,
    'Mist':rainImg,
    'Haze':cloudImg,
  }
  let weatherOutputSm = {
    'Clouds': cloudImgSm,
    'Rain':rainImgSm,
    'Snow':snowImgSm,
    'Clear':sunImgSm,
    'Thunderstorm':rainImgSm,
    'Mist':rainImgSm,
    'Haze':cloudImgSm,
  }
  const getImageWeather = () => {
    return weatherOutput[weather.weather[0].main];
  }
  let imageId = getImageWeather();

  const getSevenDayImageWeather=()=>{
    let weeklyWeather = [];
    for(let i = 0 ; i <= 7; i ++){
      weeklyWeather.push(weatherOutputSm[sevenDayWeather.daily[i].weather[0].main])
    }
    return weeklyWeather;
  }
  let sevenDayImgId = getSevenDayImageWeather();

  // Get current day month year
  let getMonthDayYear = ()=>{
    let time = new Date();
    let utc = time.getTime() + (time.getTimezoneOffset() * 60000);
    let date = new Date(utc + (3600000 * (weather.timezone/3600)));
    let newDate = date.toDateString();
    return newDate;
  }
  let currentDayMonthYear = getMonthDayYear();

  let reOrderDays = ()=>{
    let daysOfWeek = ['MON', 'TUE','WED','THU','FRI','SAT','SUN']
    let time = new Date();
    let utc = time.getTime() + (time.getTimezoneOffset() * 60000);
    let numberDay = new Date(utc + (3600000 * (weather.timezone/3600)));
    let arr1 = daysOfWeek.filter((day, i)=> i >= numberDay.getDay());
    let arr2 = daysOfWeek.filter((day, i)=> i < numberDay.getDay());
    return arr1.concat(arr2);
  }
  //form state changes and submit to make new fetch request
  const onChangeHandler = (e)=>{
    e.preventDefault();
    setFormInputCity(e.target.value);
  }
  const onChangeHandlerCountry=(e)=>{
    e.preventDefault();
    setFormInputCountry(e.target.value);
  }
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    setCity(formInputCity);
    setCountry(formInputCountry);
    console.log(`Form Submitted ${city}, ${country}`);
  }
  const onClearForm = () =>{
    if(formInputCity!=='' || formInputCountry !==''){
      setFormInputCity('');
      setFormInputCountry('');
    }
  }

  // Rendering
  if (loading){
    return (<main className='display loading'>
      <div className="loading__spinner">
        <Spinner/>
      </div>
    </main>);
  }
  return (
          !loading 
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
                sevenDayImgId = {sevenDayImgId}
              />
              
              {/* Modal */}
              <Modal 
                onChangeCity = {onChangeHandler}
                onChangeCountry = {onChangeHandlerCountry}
                onSubmit = {onSubmitHandler}
                
                //form clear
                formInputCity={formInputCity}
                formInputCountry={formInputCountry}
                setFormInputCountry= {setFormInputCountry}
                setFormInputCity={setFormInputCity}
                clearForm ={onClearForm}
              />
            </main>
          ):( // Loading Page
            <main>Loading...</main>
          )
  );
}

export default App;

