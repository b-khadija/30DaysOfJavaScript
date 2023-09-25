import React from 'react';
import { BsCloudRainHeavy } from 'react-icons/bs';


export const HeaderWeather = () => {
  return (
    <div>
      <BsCloudRainHeavy className="weather-icon" />
      <h1 className="degre">22 °C</h1>
      <h2 className="city">Tokyo</h2>
    </div>
  )
}

export default HeaderWeather;