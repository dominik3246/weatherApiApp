var weatherApp = {
  onFormSubmit: document.addEventListener('submit', (event) => {
    event.preventDefault();
    city = document.getElementById('city__input-value').value;
    console.log(city);
    weatherRequest();
  })
}

function weatherRequest() {
  var xhr = new XMLHttpRequest();
  var apiKey = 'forecast?id=524901&APPID=04921bec1844082c62487f04f17783e2';
  
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}/${apiKey}`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      document.getElementById('city__name').innerHTML = data.name;
      document.getElementById('city__temp').innerHTML = data.main.temp;
    })
    .catch((error) => {
      console.log(error);
    })
}