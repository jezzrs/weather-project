function changeTemperature(response) {
  let temperatureNumber = document.querySelector("#temperature-number");
  let temperature = Math.round(response.data.temperature.current);
  let cityName= document.querySelector("#city");
  let humidityNumber = document.querySelector ("#humidity");
  let windSpeedNumber = document.querySelector("#wind-speed");
  let dateTimeElements= document.querySelector ("#date-time")
  let date = new Date(response.date.time*1000);
  let iconElement = document.querySelector ("#icon");
  let weatherDetail = document.querySelector("#weather-description")
  
}