function changeTemperature(response) {
  let temperatureNumber = document.querySelector("temperature-number");
  let temperature = Math.round(response.data.temperature.current);
}
