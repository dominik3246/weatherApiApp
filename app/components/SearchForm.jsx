import React from 'react';
import fetch from 'isomorphic-fetch';

import DisplayWeather from './DisplayWeather.jsx';

export default class SearchForm extends React.Component {
  constructor() {
    super();
    
    this.state = {
      inputValue: '',
      showComponent: false,
      data: []
    }
    
    this.sendRequest = this.sendRequest.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  
  sendRequest(e) {
    e.preventDefault();
    this.setState({
      showComponent: true
    });
    
    const apiKey = 'forecast?id=524901&APPID=04921bec1844082c62487f04f17783e2';
    let URL = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}/${apiKey}`
    
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.setState({
          data: data
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  
  render() {
    return(
      <div>
        <form id="city__form" onSubmit={this.sendRequest}>
          <label>Podaj miasto</label>
          <input type="text" id="city__input-value" value={this.state.inputValue} onChange={this.handleChange}/>
          <button type="submit" disabled={!this.state.inputValue} onClick={this.sendRequest}>Send</button>
       </form>
       
       {this.state.showComponent ? <DisplayWeather city={this.state.inputValue} data={this.state.data}/> : null}
      </div>
    );
  }
}