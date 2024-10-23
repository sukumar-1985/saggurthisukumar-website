const apiKey = "d83c054f96aee87a4263f56bd75c1807";
const api = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=mumbai&appid=${apiKey}`;
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const search = document.querySelector(".search-bar");
const btn = document.querySelector("button");
const weatherImg = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");

const weatherFunction = function () {
  const request = async function (country) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${country}&appid=${apiKey}`
    );

    if (response.status == 404) {
      error.style.display = "block";
      weather.style.display = "none";
    }
    const data = await response.json();

    city.textContent = data.name;
    temp.textContent = data.main.temp;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed}KMPH`;

    const allWeathers = [
      "Clear",
      "Clouds",
      "Drizzle",
      "Rain",
      "Snow",
      "Haze",
      "Thunderstorm",
    ];
    const curWeather = data.weather[0].main;
    const check = allWeathers.indexOf(curWeather);
    weatherImg.src = `./images/${allWeathers[check]}.png`;

    error.style.display = "none";
    weather.style.display = "block";
  };

  request(search.value);

  search.value = "";
};

btn.addEventListener("click", function () {
  weatherFunction();
});

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") weatherFunction();
});
