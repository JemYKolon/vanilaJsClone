import { API_KEY } from "./apikey";

const WEATHER_API_KEY = API_KEY;

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weather span:first-child')
        const city = document.querySelector('#weather span:last-child')
        weather.textContent = `${data.weather[0].main} / ${data.main.temp}`
        city.textContent = data.name
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)