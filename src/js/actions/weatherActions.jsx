import axios from "axios";

export function searchCity(text){
  return dispatch  => {
    dispatch({type: "SEARCH_CITY", payload: text});
    
    dispatch(fetchWeather(text))
  } 
}


export function fetchWeather(text) {
  return (dispatch, getState) => {
    
    dispatch({type: "FETCH_WEATHER"});

    const apiKey = 'forecast?id=524901&APPID=04921bec1844082c62487f04f17783e2';
    let URL = `http://api.openweathermap.org/data/2.5/weather?q=${text}/${apiKey}`
    
    axios.get(URL)
      .then((response) => {
      console.log(response.data.name)
        dispatch({type: "FETCH_WEATHER_FULFILLED", payload: response.data})
        dispatch(addCityToHistory(response.data.name));
      })
      .catch((err) => {
        dispatch({type: "FETCH_WEATHER_REJECTED", payload: err})
      })
  }
}


export function addCityToHistory(cityName) {
  return (dispatch) => {
    
    dispatch({type: "ADD_CITY_TO_HISTORY", payload: cityName})
  }
}