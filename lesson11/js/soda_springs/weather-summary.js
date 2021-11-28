const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=ab78af5b8d06381c9785194b99f21976";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        
        let temp = jsObject.main.temp;
        let speed = jsObject.wind.speed;
        let result = windChill(temp, speed);

        document.querySelector('#windchill').textContent = result.toFixed(0);
        function windChill(temp, speed) {
            let result = 35.74  + (.6215 * temp) - (35.75 * Math.pow(speed, .16)) + (.4275 * temp * Math.pow(speed, .16));
            return result;
        
    }
        let current_temp = document.querySelector('#current');
        current_temp.textContent = jsObject.weather[0].main;

        let high_temp = document.querySelector('#high');
        high_temp.textContent = jsObject.main.temp_max.toFixed(0);

        let low_temp = document.querySelector('#low');
        low_temp.textContent = jsObject.main.temp_min.toFixed(0);

        let humidity = document.querySelector('#humidity');
        humidity.textContent = jsObject.main.humidity;

        let wind_speed = document.querySelector('#windspeed');
        wind_speed.textContent = jsObject.wind.speed.toFixed(0);
    });

