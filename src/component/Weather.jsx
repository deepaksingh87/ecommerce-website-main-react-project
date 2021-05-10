import ReactWeather, { useOpenWeather } from 'react-open-weather';
import Loading from '../NewsComponent/Loading'
import CityWeather from '../data/CityWeather.json';
import WeatherData from './WeatherData';

const customStyles = {
	fontFamily:  'Helvetica, sans-serif',
	gradientStart:  '#0181C2',
	gradientMid:  '#04A7F9',
	gradientEnd:  '#4BC4F7',
	locationFontColor:  '#FFF',
	todayTempFontColor:  '#FFF',
	todayDateFontColor:  '#B5DEF4',
	todayRangeFontColor:  '#B5DEF4',
	todayDescFontColor:  '#B5DEF4',
	todayInfoFontColor:  '#B5DEF4',
	todayIconColor:  '#FFF',
	forecastBackgroundColor:  '#FFF',
	forecastSeparatorColor:  '#DDD',
	forecastDateColor:  '#777',
	forecastDescColor:  '#777',
	forecastRangeColor:  '#777',
	forecastIconColor:  '#4BC4F7',
};



const Weather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '2127f8c79ab7b0c26bdb6c2b3581520f',
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  
  return (
      <div className="space-from-top">
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Munich"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
      style={{color:"red"}}
      theme={customStyles}
    />
    
    <form>
      <select>
        {CityWeather.map((value,index)=>
        // return <option key={index}>{value.city}</option>})
          <WeatherData key={index} {...value}/>
        )}
      </select>
    </form>

    </div>
  );
};
export default Weather;