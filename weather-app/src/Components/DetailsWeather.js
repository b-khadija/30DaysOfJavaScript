import React from 'react';
import { WiHumidity, WiWindy } from 'react-icons/wi';

const DetailsWeather = () => {
  return (
    <div className="details">
      <div className="col">
        <WiHumidity className="humidity-icon" />
        <div>
          <p className="humidity">50 %</p>
          <p>Humidity</p>
        </div>
      </div>
      <div className="col">
        <WiWindy className="wind-icon" />
        <div>
          <p className="wind">5 km/h</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  )
}

export default DetailsWeather;