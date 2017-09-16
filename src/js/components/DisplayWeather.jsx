import React from 'react';
import { shape, string, number, array } from 'prop-types';

const DisplayWeather = props => (
  <div className="weather__city-response">
    <h1>City: {props.data.name}</h1>
    <p>Temperature: {(props.data.main.temp - 273.15).toFixed(1)}</p>
    <img
      src={`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`}
      alt="weather-icon"
    />
  </div>
);

DisplayWeather.propTypes = {
  data: shape({
    name: string.isRequired,
    main: shape({
      temp: number.isRequired,
    }),
    weather: array.isRequired,
    icon: string.isRequired,
  }).isRequired,
};

export default DisplayWeather;
