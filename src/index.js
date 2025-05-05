


function changeTemperature(response) {
  let temperatureNumber = document.querySelector("#temperature-number");
  let temperature = Math.round(response.data.temperature.current);
  let cityName= document.querySelector("#city");
  let humidityNumber = document.querySelector ("#humidity");
  let windSpeedNumber = document.querySelector("#wind-speed");
  let dateTimeElements= document.querySelector ("#date-time")
  let date = new Date(response.date.time*1000);
  let iconElement = document.querySelector ("#icon");
  let weatherDetail = document.querySelector("#weather-description");


  cityName.innerHTML = response.data.city;
  dateTimeElements.innerHTML = formatDate (date);
  weatherDetail.innerHTML = response.data.condition.description;
  humidityNumber.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedNumber.innerHTML= `${response.data.wind.speed}km/h`;
  temperatureNumber.innerHTML = Math.round(temperature);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;

}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if(minutes<10){minutes=`0${minutes}`;
}

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

let formatedDate = days[day];
return `${formattedDate} ${hours} ${minutes}`;}

function searchCity(city){
  let apiKey = "b21d503dafo2f9t8344f5f54960e518f"
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(changeTemperature);
}

function stopRefreshSubmit (event){
  event.preventDefault ();
  let searchInput = document.querySelector("#search-weather-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-weather-form");
searchFormElement.addEventListener("submit",stopRefreshSubmit);