
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temp');
const description = document.getElementById('description');
const dd = document.getElementById('dd');

const apiKey = 'f2cc34d5e99cd3e0f229a62a564a7e94'; 


function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
    cityName.textContent = data.name;
    temperature.textContent = Math.round(data.main.temp);
    description.textContent = data.weather[0].description;
  })
  .catch(error => {
    alert('Sorry, we could not find weather data for that location. Please try again.');
    console.log('Error fetching weather data', error);
  });
  let date = new Date(); 
  let dD = date.getDate();
  let dm = date.getMonth();
  let dy = date.getFullYear();
  dd.textContent = `${dD}/${dm}/${dy}`;
}


searchBtn.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    getWeather(city);
  } else {
    alert('Please enter a city name.');
  }
});