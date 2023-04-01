import React, { useState } from "react";

const Weather = ({ weather, temp, theme, handleChangeTheme, handleSearchCountry }) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const handleChangeTemp = () => setIsCelsius(!isCelsius);

  return (
    <>
      <section className="grid justify-center items-center mb-24">
        <form
          onSubmit={handleSearchCountry}
          className="flex gap-2 pt-2 justify-center"
        >
          <input
            className="border-[1px] rounded-md p-2"
            type="text"
            id="country"
          />
          <button
            className="bg-blue-500 dark:bg-indigo-800 text-white p-2 rounded-md"
            type="submit"
          >
            Search
          </button>
        </form>
      </section>
      <section className="text-xl">
        <h2 className="text-center font-bold dark:text-white text-2xl tracking-wider mb-4">
          {weather.name}, {weather.sys.country}
        </h2>

        <section className="grid gap-4 sm:grid-cols-two ">
          <article className="grid grid-cols-2 justify-items-center  items-center dark:bg-indigo-800/70 bg-slate-300/70 rounded-3xl">
            <h3 className="capitalize py-2 dark:text-white col-start-1 col-end-3">
              {weather.weather[0].description}
            </h3>

            <h2 className="text-[45px] dark:text-white  font-light">
              {isCelsius ? temp.celsius + "°C" : temp.farenheit + "°F"}
            </h2>

            <div>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                alt=""
              />
            </div>
          </article>
          <article className="bg-slate-300/70 p-2 dark:bg-indigo-800/70 justify-center justify-items-stretch py-2 rounded-3xl grid grid-cols-3 sm:grid-cols-1 sm:px-2 sm:py-2 ">
            <div className="flex gap-2 text-sm justify-center dark:text-white items-center">
              <div>
                <img
                  src="/images/wind.png"
                  className="dark:filter dark:invert"
                  alt=""
                />
              </div>
              <h5>{weather.wind.speed} m/s</h5>
            </div>
            <div className="flex gap-2 text-sm justify-center dark:text-white items-center">
              <div>
                <img
                  src="/images/humidity.png"
                  className="dark:filter dark:invert"
                  alt=""
                />
              </div>
              <h5>{weather.main.humidity}%</h5>
            </div>
            <div className="flex gap-2 text-sm justify-center dark:text-white items-center">
              <div>
                <img
                  src="/images/presure.png"
                  className="dark:filter dark:invert"
                  alt=""
                />
              </div>
              <h5>{weather.main.pressure} hPa</h5>
            </div>
          </article>
        </section>

        <button
          onClick={handleChangeTemp}
          className="bg-blue-500 dark:bg-indigo-700 dark:hover:bg-indigo-800  duration-300 hover:bg-blue-900 py-2 px-6 rounded-full text-white text-sm block mx-auto mt-4 font-bold"
        >
          Change C°/F°
        </button>
        <div className="grid justify-center items-center pt-5 mt-5">
          <button
            onClick={handleChangeTheme}
            className="bg-white dark:bg-indigo-800 rounded-full p-2"
          >
            {theme === "light" ? (
              <img className="w-5 h-3" src={"/images/moon.svg"} alt="" />
            ) : (
              <img
                className="w-5 h-3 dark:filter dark:invert"
                src={"/images/sun.svg"}
                alt=""
              />
            )}
          </button>
        </div>
      </section>
    </>
  );
};

export default Weather;
