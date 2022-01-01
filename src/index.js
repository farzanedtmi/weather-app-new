let now = new Date();

let saat = document.querySelector(".container1 .row  .col-4 .first #saat");

let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thusday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

saat.innerHTML = `${day} , ${hours}:${minutes}`;

function showWeather(response) {
  document.querySelector("#town").innerHTML = response.data.name;
  document.querySelector("#damaa").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#Wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#Humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
function esmeshahr(event) {
  event.preventDefault();
  let apiKey = "0b121fa36f264f094fd0196401db2f00";
  let units = "metric";
  let city = document.querySelector("#enter-city").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", esmeshahr);
