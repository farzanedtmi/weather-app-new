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


function displayForcast (response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row"> `;
  forecast.forEach( function (forecastDay , index ) {
    if (index < 6)
{forecastHTML = forecastHTML + ` <div class= "col-2"> 

<div class= "weather-forecast-date">${formatDay(forecastDay.dt)} </div>}
<img src ="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png " width="41" />
<div class="weather-forecast-temperatures">
<span class = " weather-forecast-temperature-max"> ${Math.round(forecastDay.temp.max)}° </span>
<span class = " weather-forecast-temperature-min"> ${Math.round(forecastDay.temp.min)}° </span>
</div>
</div>
`;   } });  



function formatDay (timestamp){
  let date = new Date (timestamp*1000);
  let day = date.getDay();
  let days = ["Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat"]
  return days [day];
}

function getForecast (coordinates) {

  let apiKey = "0b121fa36f264f094fd0196401db2f00";
  let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then (displayForcast);
}

function displayTemperature (response) {

  let iconElement = document.querySelector("#icon");
  celsiusTemperature = response.data.main.temp;

  iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
 iconElement.setAttribute("alt", response.data.weather[0].description);
  document.querySelector("#town").innerHTML = response.data.name;
  document.querySelector("#damaa").innerHTML = Math.round(celsiusTemperature);
  document.querySelector("#Wind").innerHTML = Math.round(response.data.wind.speed);
  document.querySelector("#Humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#description").innerHTML = response.data.weather[0].main;
  getForecast(response.data.coord);
  
}


function esmeshahr(event) {
  event.preventDefault();
  let apiKey = "0b121fa36f264f094fd0196401db2f00";
  let units = "metric";
  let city = document.querySelector("#enter-city").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(displayTemperature);

}




function displayFarenhideTepmerature (event){
  event.preventDefault();
   celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let tepmElement = document.querySelector("#damaa");
let farenhideTepmerature = (celsiusTemperature*9 )/5 +32;
tepmElement.innerHTML= Math.round(farenhideTepmerature);
}


function displaycelsiousTepmerature (event){
  event.preventDefault();
   celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let tepmElement2 = document.querySelector ("#damaa");
  tepmElement2.innerHTML = Math.round(celsiusTemperature );
}

let celsiusTemperature = null;


let form = document.querySelector("#search-form");
form.addEventListener("submit", esmeshahr);



let fahrenheitLink = document.querySelector("#farenhide");
fahrenheitLink.addEventListener("click", displayFarenhideTepmerature);

let celsiusLink = document.querySelector("#celcious");
celsiusLink.addEventListener("click", displaycelsiousTepmerature);
