// Your code here

var appContainer = document.getElementById('weather-app')
var section = document.getElementById('weather')
var form = document.querySelector('form')
var key = '64d1d4f6681bbcd33a0a6286af2c4ac8'
var lat
var lon
var URL = 'https://api.openweathermap.org/data/3.0/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial' + '&appid=' + key
var input = document.querySelector('input')

form.onsubmit = function(e) {
    e.preventDefault()
fetch(URL)
.then (function(res){
    if (res.staturs !== 200){
        throw new Error('Location not found')
    }
    return res.json()
})
.then (renderWeather)
.catch (function(err) {
    var h2 = document.createElement('h2')
    h2.textContent = err.message
    section.appendChild(h2)
})
}

function renderWeather(weather){
    this.input.value = ""
    section.innerHTML = ""

    var h2 = document.createElement('h2')
    h2.textContent = 
    section.appendChild(h2)

    var map = document.createElement('a')
    map.href = 
    map.target = "__BLANK"
    map.textContent = "Click to view map"

    var image = document.createElement('img')
    image.src = weather.weather.icon

    var weatherTxt = document.createElement('p')
    weatherTxt.textContent = weather.current.weather.description


    var currentTemp = document.createElement('p')
    currentTemp.textContent = "Current: " + weather.data.temp + "\xB0F"


    var feelsLikeTemp = document.createElement('p')
    feelsLikeTemp.textContent = "Feels like: " + weather.data.feels_like + "\xB0F"


    var lastUpdated = document.createElement('p')
    var time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    lastUpdated.textContent = "Last updated: " + time
}