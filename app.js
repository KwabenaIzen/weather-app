let weatherImg = document.querySelector(".weather-image");
let temp = document.querySelector("#temperature");
let cityName = document.querySelector("#location");
let humidity = document.querySelector("#humidity-check");
let wind = document.querySelector("#wind-speed");
let body = document.querySelector("body");
const dataContainer = document.querySelector(".weather-data-container");
const detailsContainer = document.querySelector(".weather-details-container");

// let ApiUrl =
//   "https://api.openweathermap.org/data/2.5/weather?q=ghana&appid=563ba1a463c92ff88ce9758569323c36&units=metric";

// fetch(ApiUrl)
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error("unable to fetch data.");
//     } else return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
// temp.textContent = data.temp;
const erroMsg = document.querySelector(".error-message");

function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=563ba1a463c92ff88ce9758569323c36&units=metric`;
  fetch(apiUrl)
    .then((res) => {
      if (!res.ok || res.status == 404) {
        erroMsg.style.display = "block";
        dataContainer.style.display = "none";
        detailsContainer.style.display = "none";
        throw new Error("Unable to fetch data.");
      } else {
        erroMsg.style.display = "none";
        return res.json();
      }
    })
    .then((data) => {
      //   console.log(data);
      temp.textContent = `${Math.round(data.main.temp)}°c`;
      cityName.textContent = data.name;
      humidity.textContent = `${data.main.humidity}%`;
      wind.textContent = `${data.wind.speed}km/h`;
      dataContainer.style.display = "block";
      detailsContainer.style.display = "flex";
      if (data.weather[0].main == "Clear") {
        weatherImg.src = "images/clear.png";
        body.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1484766280341-87861644c80d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'              )";
      }
      if (data.weather[0].main == "Mist") {
        weatherImg.src = "images/mist.png";
        body.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1459496330497-25b1010dd9c8?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
      }
      if (data.weather[0].main == "Clouds") {
        weatherImg.src = "images/clouds.png";
        body.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1525776759712-7b066ce45de0?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
      }
      if (data.weather[0].main == "Drizzle") {
        weatherImg.src = "images/drizzle.png";
        body.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1524813445246-21c59abc2517?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
      }
      if (data.weather[0].main == "Rain") {
        weatherImg.src = "images/rain.png";
        body.style.backgroundImage =
          "url('https://plus.unsplash.com/premium_photo-1664299041161-25e40a5feac0?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
      }
      if (data.weather[0].main == "Snow") {
        weatherImg.src = "http://127.0.0.1:5500/images/snow.png";
        body.style.backgroundImage =
          "url('https://plus.unsplash.com/premium_photo-1663090593977-9923cc536f3b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
      }
    })
    .catch((Error) => {
      alert(Error);
    });
}
const searchBtn = document.querySelector("#search-button");

searchBtn.addEventListener("click", () => {
  const searchBar = document.querySelector("#search-box");

  getWeatherData(searchBar.value);
  searchBar.value = "";
});
