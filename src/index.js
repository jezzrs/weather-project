function changeTemperature(response) {
  let temperatureNumber = document.querySelector("#temperature-number");
  let temperature = Math.round(response.data.temperature.current);
  let cityName= document.querySelector("#city");
  let dateElement = document.querySelector ("#date");
  let humidityNumber = document.querySelector ("#humidity");
  let windSpeedNumber = document.querySelector("#wind-speed");
  
}