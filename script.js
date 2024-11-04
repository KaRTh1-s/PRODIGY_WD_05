document.getElementById('fetchWeather').addEventListener('click', function() {
    const location = document.getElementById('location').value;
    const apiKey = 'ad95ff328c276ae633719cdcf74ea641';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherInfo = `
                    <h2>Weather in ${data.name}</h2>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Conditions: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                `;
                document.getElementById('weatherResult').innerHTML = weatherInfo;
            } else {
                document.getElementById('weatherResult').innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p>Error fetching data</p>`;
        });
});
