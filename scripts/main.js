// This file contains the JavaScript code for the web page. 
// You can include functions to manipulate the DOM and handle events here.

const apiKey = 'a13175cc441ec67521564c78f98e8cb0'; // Replace with your OpenWeatherMap API key
const cairoUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cairo,EG&units=metric&appid=${apiKey}`;
const hamburgUrl = `https://api.openweathermap.org/data/2.5/weather?q=Hamburg,DE&units=metric&appid=${apiKey}`;

async function fetchTemperature(url, elementId) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById(elementId).textContent = data.main.temp;
    } catch (error) {
        console.error('Error fetching temperature:', error);
        document.getElementById(elementId).textContent = 'Error';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');
    fetchTemperature(cairoUrl, 'cairo-temp');
    fetchTemperature(hamburgUrl, 'hamburg-temp');
});
