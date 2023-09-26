import { WiStrongWind, WiHumidity } from "react-icons/wi";
import { BsThermometerSun } from "react-icons/bs";

const CurrentWeather = ({data}) => {
  return (
    <div className="weather min-h-screen flex items-center justify-center">
      <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs">
        <div>
          <p className="city font-bold text-xl">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
          <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
        </div>
        <div className="flex flex-row items-center justify-center mt-6">
          <p className="temperature font-medium text-6xl">{Math.round(data.main.temp)}°C</p>
        </div>
        <div className="details flex flex-row justify-between items-center mt-6">
          <div className="parameter-row flex flex-col items-center">
            <span className="parameter-label font-medium text-sm">
              <BsThermometerSun size={32} />
            </span>
            <span className="parameter-value text-sm text-gray-500 pt-2">{Math.round(data.main.feels_like)} °C</span>
          </div>
          <div className="parameter-row flex flex-col items-center">
            <span className="parameter-label font-medium text-sm">
              <WiStrongWind size={32} />
            </span>
            <span className="parameter-value text-sm text-gray-500 pt-2">{data.wind.speed} k/h</span>
          </div>
          <div className="parameter-row flex flex-col items-center">
            <span className="parameter-label font-medium text-sm">
              <WiHumidity size={32} />
            </span>
            <span className="parameter-value text-sm text-gray-500 pt-2">{data.main.humidity}%</span>
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
