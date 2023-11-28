// View Forecast Card Button Start

function getForecast() {
  const apiKey = '628ebe498929737554ea6da5f9950aa3';
  const cityInput = document.getElementById('cityInput-2').value;

  // Check if the city name is provided
  if (cityInput.trim() === '') {
    alert('Please enter a city name.');
    return;
  }

  // Fetch weather data from OpenWeatherMap API
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      // Process the data and update the forecast content
      updateForecast(data);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      alert('Error fetching weather data. Please try again.');
    });
}

function updateForecast(data) {
    const forecastCard = document.getElementById('forecast-card');
    forecastCard.style.display = 'block';
    const creditText = document.getElementById('credit-text-2');
    creditText.style.display = 'block';
    const forecastContent = document.getElementById('forecast-content');
    forecastContent.innerHTML = ''; // Clear previous content
  
 // Display the forecast for each day
 for (let i = 0; i < data.list.length; i += 8) {
    const dayData = data.list[i];
    const date = new Date(dayData.dt_txt);
    const min_temperature = dayData.main.temp_min - 273.15;
    const max_temperature = dayData.main.temp_max - 273.15;
    const icon = dayData.weather[0].icon;

    // Get day of the week and formatted date
    const dayOfWeek = getDayOfWeek(date.getDay());
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date.getFullYear()}`;

    // Create HTML elements for each day
    const dayElement = document.createElement('div');
    dayElement.innerHTML = `
      <div>
        <p><strong>${Math.round(min_temperature)} - ${Math.round(max_temperature)}°C</strong></p>
        <img src="https://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
        <p><strong>${dayOfWeek} <br> ${formattedDate}</strong></p>
      </div>
    `;

// Celsius to Fahrenheit Button Start

var celsius = document.querySelector('#celsiusbtn'),
fahrenheit = document.querySelector('#fahrenheitbtn');

celsius.addEventListener('click', toCelsius);
fahrenheit.addEventListener('click', toFahrenheit);

function toCelsius() {
celsius.classList.add('active');
celsius.removeAttribute('href');
fahrenheit.classList.remove('active');
fahrenheit.setAttribute('href', '#');
dayElement.innerHTML = 
    `<div>
    <p><strong>${Math.round(min_temperature)} - ${Math.round(max_temperature)}°C</strong></p>
    <img src="https://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
    <p><strong>${dayOfWeek} <br> ${formattedDate}</strong></p>
    </div>`;
}

function toFahrenheit() {
fahrenheit.classList.add('active');
fahrenheit.removeAttribute('href');
celsius.classList.remove('active');
celsius.setAttribute('href', '#');
dayElement.innerHTML = 
    `<div>
    <p><strong>${Math.round((min_temperature * 9) / 5 + 32) } - ${Math.round((max_temperature * 9) / 5 + 32)}°F</strong></p>
    <img src="https://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
    <p><strong>${dayOfWeek} <br> ${formattedDate}</strong></p>
    </div>`;
}

// Celsius to Fahrenheit Button End

    forecastContent.appendChild(dayElement);
  }
}

function getDayOfWeek(dayIndex) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeek[dayIndex];
}

// View Forecast Card Button End


// This Script For View Forecast Scroll Button Start

function getForecastScroll() {
  const apiKey = '628ebe498929737554ea6da5f9950aa3';
  const cityInput = document.getElementById('cityInput-1').value;

  // Fetch weather data from OpenWeatherMap API
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      // Process the data and update the forecast content
      updateForecast(data);
    })
}

function updateForecast(data) {
    const forecastCard = document.getElementById('forecast-card');
    forecastCard.style.display = 'block';
    const creditText = document.getElementById('credit-text-2');
    creditText.style.display = 'block';
    const forecastContent = document.getElementById('forecast-content');
    forecastContent.innerHTML = ''; // Clear previous content
  
 // Display the forecast for each day
 for (let i = 0; i < data.list.length; i += 8) {
    const dayData = data.list[i];
    const date = new Date(dayData.dt_txt);
    const min_temperature = dayData.main.temp_min - 273.15;
    const max_temperature = dayData.main.temp_max - 273.15;
    const icon = dayData.weather[0].icon;

    // Get day of the week and formatted date
    const dayOfWeek = getDayOfWeek(date.getDay());
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date.getFullYear()}`;

    // Create HTML elements for each day
    const dayElement = document.createElement('div');
    dayElement.innerHTML = `
      <div>
        <p><strong>${Math.round(min_temperature)} - ${Math.round(max_temperature)}°C</strong></p>
        <img src="https://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
        <p><strong>${dayOfWeek} <br> ${formattedDate}</strong></p>
      </div>
    `;

// Celsius to Fahrenheit Button Start

var celsius = document.querySelector('#celsiusbtn'),
fahrenheit = document.querySelector('#fahrenheitbtn');

celsius.addEventListener('click', toCelsius);
fahrenheit.addEventListener('click', toFahrenheit);

function toCelsius() {
celsius.classList.add('active');
celsius.removeAttribute('href');
fahrenheit.classList.remove('active');
fahrenheit.setAttribute('href', '#');
dayElement.innerHTML = 
    `<div>
    <p><strong>${Math.round(min_temperature)} - ${Math.round(max_temperature)}°C</strong></p>
    <img src="https://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
    <p><strong>${dayOfWeek} <br> ${formattedDate}</strong></p>
    </div>`;
}

function toFahrenheit() {
fahrenheit.classList.add('active');
fahrenheit.removeAttribute('href');
celsius.classList.remove('active');
celsius.setAttribute('href', '#');
dayElement.innerHTML = 
    `<div>
    <p><strong>${Math.round((min_temperature * 9) / 5 + 32) } - ${Math.round((max_temperature * 9) / 5 + 32)}°F</strong></p>
    <img src="https://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
    <p><strong>${dayOfWeek} <br> ${formattedDate}</strong></p>
    </div>`;
}

// Celsius to Fahrenheit Button End

    forecastContent.appendChild(dayElement);
  }
}

function getDayOfWeek(dayIndex) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeek[dayIndex];
}

// View Forecast Scroll Button End