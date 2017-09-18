import React from 'react';
import { shape, string, number, array } from 'prop-types';
import GoogleMap from 'google-map-react';

const MarkerRadius = ({ cityName }) => (
  <div
    style={{
      position: 'relative',
      color: 'white',
      background: 'rgba(173, 201, 237, 0.7)',
      borderRadius: 100,
      height: 60,
      width: 60,
      top: -20,
      left: -30,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {cityName}
  </div>
);

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
    <div className="map" style={{ width: '100%', height: '400px' }}>
      <GoogleMap
        defaultCenter={{ lat: props.data.coord.lat, lng: props.data.coord.lon }}
        defaultZoom={7}
      >
        <MarkerRadius
          lat={props.data.coord.lat}
          lng={props.data.coord.lon}
          cityName={props.data.name}
        />
      </GoogleMap>
    </div>
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

MarkerRadius.propTypes = {
  cityName: string.isRequired,
};

export default DisplayWeather;
