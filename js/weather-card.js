// Openweathermap API Key

const apiKey = '628ebe498929737554ea6da5f9950aa3';

function getWeatherOne() {{
    const cityInput = document.getElementById('cityInput-1');
    const cityName = cityInput.value;

    if (cityName === '') {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    const weatherCard = document.getElementById('weather-card');
    weatherCard.style.display = 'block';
    const creditText = document.getElementById('credit-text-1');
    creditText.style.display = 'block';
    const scrollbtn = document.getElementById('scrollbtn');
    scrollbtn.style.display = 'inline-block';
    const conditionIconElement = document.getElementById('conditionIcon');
    const conditionElement = document.getElementById('condition');
    const temperatureElement = document.getElementById('temp');
    const timeElement = document.getElementById('time');
    const locationElement = document.getElementById('location');
    const windSpeedElement = document.getElementById('windSpeed');

    if (data.cod === '404') {
        alert('City not found. Please enter a valid city name.');
        return;
    }

    // Display condition icon
    const conditionIconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    conditionIconElement.src = conditionIconUrl;

    // Display weather details
    const condition = data.weather[0].main;
    const temperature = Math.round(data.main.temp);
    const time = new Date().toLocaleTimeString();
    const location = `${data.name}, ${data.sys.country}`;
    const windSpeed = data.wind.speed;

    conditionElement.textContent = condition;
    temperatureElement.textContent = temperature;
    timeElement.textContent = time;
    locationElement.textContent = location;
    windSpeedElement.textContent = `Wind: ${windSpeed}  km/h`;


    // Custom Condition Images

    const weatherImage = document.getElementById('weatherImage');
    const weatherCode = data.weather[0].id;

    // Images change based on OpenWeatherMap weather codes
    let imageUrl;
    if (200 <= weatherCode && weatherCode < 300) {
        imageUrl = 'images/condition/thunderstorms.png';
    } else if (300 <= weatherCode && weatherCode < 400) {
        imageUrl = 'images/condition/drizzle.png';
    } else if (500 <= weatherCode && weatherCode < 600) {
        imageUrl = 'images/condition/rain.png';
    } else if (600 <= weatherCode && weatherCode < 700) {
        imageUrl = 'images/condition/snow.png';
    }  else if (701 <= weatherCode && weatherCode <= 781) {
            imageUrl = 'images/condition/mist.png';
    } else if (weatherCode === 800) {
        imageUrl = 'images/condition/clear.png';
    } else if (801 <= weatherCode && weatherCode < 900) {
        imageUrl = 'images/condition/clouds.png';
    } else {
        imageUrl = 'images/condition/default.png';
    }

    // Set the src attribute
    weatherImage.src = imageUrl;

// Celsius to Fahrenheit Button Start

    var temp = document.querySelector('#temp'),
    celsius = document.querySelector('#celsius'),
    fahrenheit = document.querySelector('#fahrenheit');

celsius.addEventListener('click', toCelsius);
fahrenheit.addEventListener('click', toFahrenheit);

function toCelsius() {
    celsius.classList.add('active');
    celsius.removeAttribute('href');
    fahrenheit.classList.remove('active');
    fahrenheit.setAttribute('href', '#');
    temp.innerHTML = Math.round((data.main.temp));
}

function toFahrenheit() {
    fahrenheit.classList.add('active');
    fahrenheit.removeAttribute('href');
    celsius.classList.remove('active');
    celsius.setAttribute('href', '#');
    temp.innerHTML = Math.round((data.main.temp * 9) / 5 + 32);
}

// Celsius to Fahrenheit Button End

 }
}



// This Script for Weather Page

function getWeatherTwo() {{
    const cityInput = document.getElementById('cityInput-1');
    const cityName = cityInput.value;

    if (cityName === '') {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    const weatherCard = document.getElementById('weather-card');
    weatherCard.style.display = 'block';
    const creditText = document.getElementById('credit-text-1');
    creditText.style.display = 'block';
    const conditionIconElement = document.getElementById('conditionIcon');
    const conditionElement = document.getElementById('condition');
    const temperatureElement = document.getElementById('temp');
    const timeElement = document.getElementById('time');
    const locationElement = document.getElementById('location');
    const windSpeedElement = document.getElementById('windSpeed');

    if (data.cod === '404') {
        alert('City not found. Please enter a valid city name.');
        return;
    }

    // Display condition icon
    const conditionIconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    conditionIconElement.src = conditionIconUrl;

    // Display weather details
    const condition = data.weather[0].main;
    const temperature = Math.round(data.main.temp);
    const time = new Date().toLocaleTimeString();
    const location = `${data.name}, ${data.sys.country}`;
    const windSpeed = data.wind.speed;

    conditionElement.textContent = condition;
    temperatureElement.textContent = temperature;
    timeElement.textContent = time;
    locationElement.textContent = location;
    windSpeedElement.textContent = `Wind: ${windSpeed}  km/h`;


    // Custom Condition Images

    const weatherImage = document.getElementById('weatherImage');
    const weatherCode = data.weather[0].id;

    // Images change based on OpenWeatherMap weather codes
    let imageUrl;
    if (200 <= weatherCode && weatherCode < 300) {
        imageUrl = 'images/condition/thunderstorms.png';
    } else if (300 <= weatherCode && weatherCode < 400) {
        imageUrl = 'images/condition/drizzle.png';
    } else if (500 <= weatherCode && weatherCode < 600) {
        imageUrl = 'images/condition/rain.png';
    } else if (600 <= weatherCode && weatherCode < 700) {
        imageUrl = 'images/condition/snow.png';
    }  else if (701 <= weatherCode && weatherCode <= 781) {
            imageUrl = 'images/condition/mist.png';
    } else if (weatherCode === 800) {
        imageUrl = 'images/condition/clear.png';
    } else if (801 <= weatherCode && weatherCode < 900) {
        imageUrl = 'images/condition/clouds.png';
    } else {
        imageUrl = 'images/condition/default.png';
    }

    // Set the src attribute
    weatherImage.src = imageUrl;

// Celsius to Fahrenheit Button Start

    var temp = document.querySelector('#temp'),
    celsius = document.querySelector('#celsius'),
    fahrenheit = document.querySelector('#fahrenheit');

celsius.addEventListener('click', toCelsius);
fahrenheit.addEventListener('click', toFahrenheit);

function toCelsius() {
    celsius.classList.add('active');
    celsius.removeAttribute('href');
    fahrenheit.classList.remove('active');
    fahrenheit.setAttribute('href', '#');
    temp.innerHTML = Math.round((data.main.temp));
}

function toFahrenheit() {
    fahrenheit.classList.add('active');
    fahrenheit.removeAttribute('href');
    celsius.classList.remove('active');
    celsius.setAttribute('href', '#');
    temp.innerHTML = Math.round((data.main.temp * 9) / 5 + 32);
}

// Celsius to Fahrenheit Button End

 }
}