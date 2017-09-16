import React from 'react';
import { shape, string, number, array } from 'prop-types';

const DisplayWeather = props => (
  <div className="weather__city-response">
    <h1>City: {props.data.name}</h1>
    <p>Temperature: {(props.data.main.temp - 273.15).toFixed(1)}</p>
    <ul className="city-response__icons">
      {props.data.weather.map(w => (
        <li key={w.id}>
          <img src={`http://openweathermap.org/img/w/${w.icon}.png`} alt="weather-icon" />
        </li>
      ))}
    </ul>
  </div>
);

DisplayWeather.propTypes = {
  data: shape({
    name: string.isRequired,
    main: shape({
      temp: number.isRequired,
    }),
    weather: array.isRequired,
  }).isRequired,
};

export default DisplayWeather;
