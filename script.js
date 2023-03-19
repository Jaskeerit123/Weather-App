
const apiKey = '51f68f70984ef904e01a390a737b5a19'
const fetchWeather = async (lon, lat) => {
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?lat='
        + lat
        + "&lon="
        + lon
        + '&units=metric&appid='
        + apiKey
    )
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            document.querySelector(".city").innerText = 'Weather in ' + data.name;
            document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
            const description = data.weather[0].description;
            const arr= description.split(" ")

            for (var i = 0; i < arr.length; i++) {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            }
            const str2 = arr.join(" ");
            console.log(str2)
            document.querySelector(".description").innerText = str2;
            document.querySelector(".temp").innerText = data.main.temp + "°C";
            document.querySelector(".humidity").innerText = "Humidity: " + data.main.humidity + "%";
            document.querySelector(".wind").innerText = "Wind Speed: " + data.wind.speed + "%";
        })
        .catch((e) => console.log(e))
}
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        let lon = position.coords.longitude
        let lat = position.coords.latitude
        fetchWeather(lon, lat)
        
       
    })
}