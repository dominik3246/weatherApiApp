import React from 'react';

import { connect } from 'react-redux';

import { searchCity } from '../actions/weatherActions.jsx';
import DisplayWeather from './DisplayWeather.jsx';

@connect((store) => {
  return {
    weather: store.weather.weather,
    fetched: store.weather.fetched,
    citiesHistory: store.weather.citiesHistory,
  };
})


export default class SearchCity extends React.Component {
  
  citySearchHistory(city) {
    this.props.dispatch(searchCity(city));
  }
  render() {
    let input;
    
    return(
      <div>
         <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          this.props.dispatch(searchCity(input.value))
          input.value = ''
        }}>
          <input ref={node => {
            input = node
          }} />
          <button type="submit">
            Search city
          </button>
        </form>
        
        {this.props.citiesHistory.map((city, index) => {
          return <li key={index}><a href="#" onClick={() => this.citySearchHistory(city)}>{city}</a></li>
        })}
        
        {this.props.fetched ?
          <DisplayWeather data={this.props.weather}/> :
          null
        }
        
      </div>
    )
  }
}