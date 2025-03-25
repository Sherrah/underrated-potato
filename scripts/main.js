// This file contains the JavaScript code for the web page. 
// You can include functions to manipulate the DOM and handle events here.

const apiKey = 'a13175cc441ec67521564c78f98e8cb0'; // Replace with your OpenWeatherMap API key
const cairoUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cairo,EG&units=metric&appid=${apiKey}`;
const hamburgUrl = `https://api.openweathermap.org/data/2.5/weather?q=Hamburg,DE&units=metric&appid=${apiKey}`;

async function fetchTemperature(url, elementId) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById(elementId).textContent = `${data.main.temp} °C`;
        document.getElementById(elementId).classList.remove('loading-spinner');
    } catch (error) {
        console.error('Error fetching temperature:', error);
        document.getElementById(elementId).textContent = 'Error';
        document.getElementById(elementId).classList.remove('loading-spinner');
    }
}

function refreshTemperatures() {
    document.getElementById('cairo-temp').textContent = "";
    document.getElementById('cairo-temp').classList.add('loading-spinner');
    document.getElementById('hamburg-temp').textContent = "";
    document.getElementById('hamburg-temp').classList.add('loading-spinner');

    setTimeout(() => {
        fetchTemperature(cairoUrl, 'cairo-temp');
        fetchTemperature(hamburgUrl, 'hamburg-temp');
    }, 2000); // 2-second delay
}

// Initial fetch
refreshTemperatures();
