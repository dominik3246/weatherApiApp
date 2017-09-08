import React from 'react';

export default class DisplayWeather extends React.Component {
  constructor() {
    super();
    
  }
  
  
  render() {
    
    var data = this.props.data;
    
    return(
      <div className="weather__city-response">
        <h1>City: {data.name}</h1>
        <p>Temperature: {(data.main.temp - 273.15).toFixed(1)}</p>
        <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}/>
      </div>
    );
  }
}