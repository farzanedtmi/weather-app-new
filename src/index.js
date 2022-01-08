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
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute("src", response.data.weather[0].description);
  iconElement.setAttribute("alt", response.data.weather[0].description)
  document.querySelector("#town").innerHTML = response.data.name;
  document.querySelector("#damaa").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#Wind").innerHTML = Math.round(response.data.wind.speed);
  document.querySelector("#Humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#description").innerHTML = response.data.weather[0].main;
    celsiusTemperature = response.data.main.temp;
}
function esmeshahr(event) {
  event.preventDefault();
  let apiKey = "0b121fa36f264f094fd0196401db2f00";
  let units = "metric";
  let city = document.querySelector("#enter-city").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}

function displayFarenhideTepmerature (event){
  event.preventDefault();
  let tepmElement = document.querySelector("#damaa");
let farenhideTepmerature = (celsiusTemperature*9 )/5 +32;
tepmElement.innerHTML= Math.round(farenhideTepmerature);
}


function displaycelsiousTepmerature (event){
  event.preventDefault();
  let tepmElement = document.querySelector ("damaa");
  tepmElement.innerHTML = math.round(celsiusTemperature);
}

let celsiusTemperature= null;


let form = document.querySelector("#search-form");
form.addEventListener("submit", esmeshahr);



let farenhideLink = document.querySelector("#farenhide");
farenhideLink.addEventListener("click", displayFarenhideTepmerature);

let celciousLink = document.querySelector("#celcious");
celciousLink.addEventListener("click",displaycelsiousTepmerature);