// script.js

document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const city = document.getElementById('city').value;
    const apiKey = '269144da7d57f2c92e83b520df3776ee'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `<p class="error">${error.message}</p>`;
        });
});
