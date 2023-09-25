import { BiSearchAlt2 } from 'react-icons/bi';


export const SearchWeather = () => {

  return (
    <div className="search">
      <input type='text' placeholder="Enter city name" />
      <button className="search-button">
        <BiSearchAlt2 className='search-icon'/>
      </button>
    </div>
  )
}

export default SearchWeather;