import {useState, useEffect} from 'react'
import Hero from './components/Hero';
import Modal from './components/modal/Modal';

function App() {
  /* Hooks */
  const [weather, setWeather] = useState({});
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

  const getWeather = async()=>{
    const weatherFromServer = await fetchWeather();
    setWeather(weatherFromServer);
  }
  console.log(weather);
  
  if (!weather) {
    return <main>Still loading...</main>;
  }

  //weather.main.pressure
  //weather.main.humidity
  //weather.wind.speed 
  return (
    <main >
      <Hero 
        pressure={1} 
        humidity={2}
        speed={3}  
      />
      <Modal />
    </main>
  );
}

export default App;




/* 

StrictMode renders components twice (on dev but not production) in order to detect any problems with your code and warn you about them (which can be quite useful).

If you have StrictMode enabled in your app but don't remember enabling it, it might be because you used create-react-app or similar to create your app initially, which automatically enables StrictMode by default.


the build version should ususally render once 
*/