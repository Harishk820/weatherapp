import React, { useState, useEffect } from "react";

const WeatherCard = ({ TempInfo }) => {
  const [weatherState, setweatherState] = useState(" ");

  const { temp, humidity, pressure, weatermood, name, speed, country, sunset } =
    TempInfo;

  useEffect(() => {
    if (weatermood) {
      switch (weatermood) {
        case "Clouds":
          setweatherState("wi-day-cloudy");
          break;
        case "Haze":
          setweatherState("wi-fog");
          break;
        case "Clear":
          setweatherState("wi-day-sunny");
          break;
        case "Mist":
          setweatherState("wi-dust");
          break;

        default:
        case "Clear":
          setweatherState("wi-day-sunny");
          break;
      }
    }
  }, [weatermood]);

  // -------------time conversion into sec-----------

  let sec = sunset;
  let date = new Date(sec * 10000);
  let timestr = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;C</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weatermood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>
        <div className="date"> {new Date().toLocaleString()}</div>

        {/* ------------------------------  4 column section -------------------------------- */}

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timestr} PM <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
