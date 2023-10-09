
const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();

  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <div className="flex flex-col justify-center bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
      <label className="text-2xl font-bold text-gray-900">7 day forecast</label>
        {data.list.slice(0, 7).map((item, idx) => (
          <div key={idx} className="flex items-center p-3 mt-5">
            <label className="day font-semibold text-lg w-1/4">{forecastDays[idx]}</label>
            <img
              alt="weather"
              src={`icons/${item.weather[0].icon}.png`}
              className="w-9 h-9 flex-shrink-0"
            />
            <label className="description font-semibold flex-grow ml-20">
              {item.weather[0].description}
            </label>
            <label className="font-semibold text-lg w-1/4 text-right">
              {Math.round(item.main.temp_min)} °C /
              {Math.round(item.main.temp_max)} °C
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Forecast;
