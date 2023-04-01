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
        setBackground("bg-bg2");
      } else if(response.data.weather[0].main === "Clear") {
        setBackground("bg-bg1");
      } else if(response.data.weather[0].main === "Rain") {
        setBackground("bg-bg6");
      } else if(response.data.weather[0].main === "Snow") {
        setBackground("bg-bg8");
      } else if(response.data.weather[0].main === "Thunderstorm") {
        setBackground("bg-bg10");
      } else if(response.data.weather[0].main === "Drizzle") {
        setBackground("bg-bg7");
      } else if(response.data.weather[0].main === "Mist") {
        setBackground("bg-bg5");
      } else if(response.data.weather[0].main === "Smoke") {
        setBackground("bg-bg5");
      } else if(response.data.weather[0].main === "Haze") {
        setBackground("bg-bg5");
      } else if(response.data.weather[0].main === "Dust") {
        setBackground("bg-bg5");
      } else if(response.data.weather[0].main === "Fog") {
        setBackground("bg-bg3");
      } else if(response.data.weather[0].main === "Sand") {
        setBackground("bg-bg2");
      } else if(response.data.weather[0].main === "Ash") {
        setBackground("bg-bg2");
      } else if(response.data.weather[0].main === "Squall") {
        setBackground("bg-bg6");
      } else{
        setBackground("bg-bg4");
      }
      setTemp(newTemps);
    });
  }, [coords]);
  return (
    
    <div className={` App duration-300 ${background} dark:bg-[rgba(0,0,0,0.5)] dark:bg-blend-darken bg-no-repeat bg-cover bg-center px-2 grid place-content-center min-h-screen font-lato`}>
      {weather ?  <Weather theme={theme} handleChangeTheme={handleChangeTheme} temp={temp} weather={weather} /> : <Loader />}
    </div>
    
  );
}

export default App;
