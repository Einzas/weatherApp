import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";
import Loader from "./components/Loader";

function App() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();
  const [theme, setTheme] = useState("light");
  const [background, setBackground] = useState("");
  const API_KEY = "bbf653c6dd30a6759ce8ff0119ee032d";
  const success = (position) => {
    const currentCoords = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };

    setCoords(currentCoords);
  };


  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    if (!coords) return;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=${API_KEY}`;
    axios.get(URL).then((response) => {
      setWeather(response.data);
      const newTemps = {
        farenheit: ((response.data.main.temp - 273.15) * 1.8 +32).toFixed(1),
        celsius: (response.data.main.temp - 273.15).toFixed(1),
      };
      console.log(response.data.weather[0].main);
      if(response.data.weather[0].main === "Clouds") {
        setBackground("bg5");
      } else if(response.data.weather[0].main === "Clear") {
        setBackground("bg2");
      } else if(response.data.weather[0].main === "Rain") {
        setBackground("rain");
      } else if(response.data.weather[0].main === "Snow") {
        setBackground("snow");
      } else if(response.data.weather[0].main === "Thunderstorm") {
        setBackground("thunderstorm");
      } else if(response.data.weather[0].main === "Drizzle") {
        setBackground("drizzle");
      } else if(response.data.weather[0].main === "Mist") {
        setBackground("mist");
      } else if(response.data.weather[0].main === "Smoke") {
        setBackground("smoke");
      } else if(response.data.weather[0].main === "Haze") {
        setBackground("haze");
      } else if(response.data.weather[0].main === "Dust") {
        setBackground("dust");
      } else if(response.data.weather[0].main === "Fog") {
        setBackground("fog");
      } else if(response.data.weather[0].main === "Sand") {
        setBackground("sand");
      } else if(response.data.weather[0].main === "Ash") {
        setBackground("ash");
      } else if(response.data.weather[0].main === "Squall") {
        setBackground("squall");
      }
      setTemp(newTemps);
    });
  }, [coords]);
  return (
    
    <div className={` App duration-300 ${'bg-'+background} dark:bg-[rgba(0,0,0,0.5)] dark:bg-blend-darken bg-no-repeat bg-cover bg-center px-2 grid place-content-center min-h-screen font-lato`}>
      {weather ?  <Weather theme={theme} handleChangeTheme={handleChangeTheme} temp={temp} weather={weather} /> : <Loader />}
    </div>
    
  );
}

export default App;
