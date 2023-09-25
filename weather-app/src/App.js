import './WeatherApp/WeatherApp.css';
import SearchWeather from './Components/SearchWeather';
import HeaderWeather from './Components/HeaderWeather';
import DetailsWeather from './Components/DetailsWeather';


function App() {


  return (
    <div className='card'>
      <SearchWeather />
      <div className='weather'>
        <HeaderWeather />
        <DetailsWeather />
      </div>
    </div>
  );
}

export default App;
