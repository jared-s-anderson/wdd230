const requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=43.6724&lon=-111.915&exclude=minutely,hourly&units=imperial&appid=0efbfc14fa861e0ae067b5f38772f986";

fetch(requestUrl)
    .then((response) => response.json())
    .then((jsonObject) => {
        const current_weather = jsonObject.current;
        const forecast = jsonObject.daily.slice(0, 3);
        alert = jsonObject.alert;

        document.getElementById("current").textContent = current_weather.weather[0].description;
        document.getElementById("temp").textContent = current_weather.temp;
        document.getElementById("humidity").textContent = current_weather.humidity;
        document.getElementById("windspeed").textContent = current_weather.wind_speed;

        displayAlerts();

        /*
        
        const date = new Date;
        const today = date.getDay();

        const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

        let number = today;
        forecast.forEach((weather) => {
            number += 1;
            if (number == 7) {
                number = 0;
            }

            const items = document.createElement("div");
            items.classList = "items";
            const day = document.createElement("h3");
            day.textContent = week[number];

            const path = "https://openweathermap.org/img/w/" + weather.weather[0].icon + ".png";
            const icon = document.createElement("img");
            icon.src = path;
            icon.alt = weather.weather[0].description;

            const temperature = document.createElement("p");
            temperature.textContent = weather.temp.day;

            items.appendChild(day);
            items.appendChild(icon);
            items.appendChild(temp);

            document.querySelector(".forecast-box").appendChild(items);
            
        })*/
    })