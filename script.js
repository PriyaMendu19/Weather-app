const apiKey = '0cba0015a5d2d40461bc5c4b7d81cdb3';

document.getElementById('fetchWeather').addEventListener('click', () => {
  const location = document.getElementById('location').value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`; // Include '&units=metric' to get temperature in Celsius

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Extract the required weather information from the API response

      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;

      // Display the weather information in the UI
      document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`; // Display temperature in Celsius
      document.getElementById('description').textContent = `Description: ${description}`;
      const weatherIcon = document.getElementById('icon');
      weatherIcon.style.backgroundImage = `url('https://openweathermap.org/img/w/${icon}.png')`;
      weatherIcon.classList.add('weather-icon');
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
