import { WiStrongWind, WiHumidity } from "react-icons/wi";
import { PiThermometerDuotone } from "react-icons/pi";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather flex items-center justify-center bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
      <div className="w-full items-center justify-center bg-white p-6 rounded-xl ring-8 ring-white ring-opacity-40">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-6xl font-bold">{Math.round(data.main.temp)}°C</p>
            <p className="text-xl font-semibold mt-1 text-gray-500">
              {data.city}
            </p>
            <p className="text-xs font-semibold text-gray-400">
              {data.weather[0].description}
            </p>
          </div>
          <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
            <img
              alt="weather"
              className="weather-icon"
              src={`icons/${data.weather[0].icon}.png`}
            />
          </div>
        </div>
        <div className="details flex flex-row justify-between items-center p-2 mt-10">
          <div className="parameter-row flex flex-col items-center">
            <span className="parameter-label font-medium text-sm">
              <PiThermometerDuotone size={32} />
            </span>
            <span className="parameter-value text-sm text-gray-500 pt-2">
              {Math.round(data.main.feels_like)} °C
            </span>
          </div>
          <div className="parameter-row flex flex-col items-center">
            <span className="parameter-label font-medium text-sm">
              <WiStrongWind size={32} />
            </span>
            <span className="parameter-value text-sm text-gray-500 pt-2">
              {data.wind.speed} k/h
            </span>
          </div>
          <div className="parameter-row flex flex-col items-center">
            <span className="parameter-label font-medium text-sm">
              <WiHumidity size={32} />
            </span>
            <span className="parameter-value text-sm text-gray-500 pt-2">
              {data.main.humidity}%
            </span>
          </div>
          <div className="parameter-row flex flex-col items-center">
            <span className="parameter-label font-medium text-sm">
              <img alt="pressure" src="icons/pression.png" />
            </span>
            <span className="parameter-value text-sm text-gray-500 pt-2">
              {data.main.pressure} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
