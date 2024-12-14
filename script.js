const apiKey = "267d4619233dfa4d9d42ed49194186ae";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather() {
    const cityInput = document.getElementById("cityInput");
    const city = cityInput.value.trim();
    
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        
        document.querySelector(".city").innerHTML = "Weather in " + data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        
    } catch (error) {
        alert("City not found. Please enter a valid city name.");
        console.error('Error:', error);
    }
}
