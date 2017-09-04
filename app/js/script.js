var weatherApp = {
  onFormSubmit: document.addEventListener('submit', (event) => {
    event.preventDefault();
    city = document.getElementById('city__input-value').value;
    console.log(city);
    weatherRequest();
  })
}

function weatherRequest() {
  var apiKey = 'forecast?id=524901&APPID=04921bec1844082c62487f04f17783e2';
  
  var result = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}/${apiKey}`)
    .then((resp) => resp.json())
    .then((data) => {
    console.log(data);
      const tempK = (data.main.temp).toFixed(1);
      const tempC = (tempK - 273.15).toFixed(1);
      const tempF = ((9/5) * tempC + 32).toFixed(1);
      document.getElementById('city__name').innerHTML = data.name;
      document.getElementById('city__temp').innerHTML = `Fahrenheit temperature: ${tempF}, Celcius temperature ${tempC}, Kelvin temperature ${tempK}`;
      document.getElementById('temp__icon').src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    })
    .catch((error) => {
      console.log(error);
    })
}