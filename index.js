// Your code here

var appContainer = document.getElementById('weather-app')
var section = document.getElementById('weather')
var form = document.querySelector('form')
var input = document.querySelector('input')

form.onsubmit = function(e) {
    e.preventDefault()
    var usersInput = input.value
    var URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + usersInput + '&APPID=64d1d4f6681bbcd33a0a6286af2c4ac8'
fetch(URL)
.then (function(res){
    if (res.status !== 200){
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

function renderWeather(weather) {
    this.input.value = ""
    section.innerHTML = ""

    var br = document.createElement('br')

    var h2 = document.createElement('h2')
    var city = weather.name
    var country = weather.sys.country
    h2.textContent = city + ", " + country
    h2.classList.add('weather_name')
    section.appendChild(h2)

    var map = document.createElement('a')
    var lat = weather.coord.lat
    var long = weather.coord.lon
    map.href = 'https://www.google.com/maps/search/?api=1&query=' + lat +"," + long
    map.target = "__BLANK"
    map.textContent = "Click to view map"
    map.classList.add('map')
    section.appendChild(map)

    var image = document.createElement('img')
    var icon = weather.weather[0].icon
    image.src = 'https://openweathermap.org/img/wn/' + icon + '.png'
    image.classList.add('icon')
    section.appendChild(image)

    var weatherTxt = document.createElement('p')
    weatherTxt.textContent = weather.weather[0].description
    weatherTxt.style.textTransform = "capitalize"
    weatherTxt.classList.add('description')
    section.appendChild(weatherTxt)
    section.appendChild(br)

    var currentTemp = document.createElement('p')
    currentTemp.textContent = "Current: " + weather.main.temp + "\xB0F"
    currentTemp.classList.add('current_temp')
    section.appendChild(currentTemp)


    var feelsLike = document.createElement('p')
    feelsLikeTemp = weather.main.feels_like
    feelsLike.textContent = "Feels like: " + feelsLikeTemp + "\xB0F"
    feelsLike.classList.add('feels_like')
    section.appendChild(feelsLike)
    section.appendChild(br)


    var lastUpdated = document.createElement('p')
    var time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    lastUpdated.textContent = "Last updated: " + time
    lastUpdated.classList.add('last_updated')
    section.appendChild(lastUpdated)
}