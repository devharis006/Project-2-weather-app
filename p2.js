const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const loading = document.getElementById("loading");
const lastUpdated = document.getElementById("lastUpdated");
const apiKey = "46e4d3a8a3224705913192607263107";
const weatherIcon = document.getElementById("weatherIcon");
searchBtn.addEventListener("click", function () {

    const city = cityInput.value;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    if (city === "") {
        alert("Please enter a city name");
        return;
    }
    loading.innerText = "Fetching weather...";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.error) {
    loading.innerText = "";
    alert("City not found!");
    return;
}
        
    cityName.innerText = data.location.name;
    temperature.innerText = data.current.temp_c + " °C";
    condition.innerText = data.current.condition.text;
    weatherIcon.src = "https:" + data.current.condition.icon;
    humidity.innerText = "Humidity: " + data.current.humidity + "%";
    wind.innerText = "Wind: " + data.current.wind_kph + " km/h";
    lastUpdated.innerText = "Last Updated: " + data.current.last_updated;
    loading.innerText = "";
    });
});
cityInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        searchBtn.click();
    }

});