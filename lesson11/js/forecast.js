/*
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=ab78af5b8d06381c9785194b99f21976";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const day = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let list = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        for (let d = 0; d <= 4; d++) {
            let date = new Date(list[d].dt_txt);
            document.getElementById(`day${d + 1}`).textContent = day[date.getDay()];
            document.getElementById(`forecast${d + 1}`).textContent = list[d].main.temp;
            const imagesrc = 'https://openweathermap.org/img/w/' + list[d].weather[0].icon + '.png';
            const description = list[d].weather[0].description;
            document.getElementById(`icon${d + 1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${d + 1}`).setAttribute('alt', description);
        }

    });
    */
    const apiURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=Preston&units=imperial&appid=0efbfc14fa861e0ae067b5f38772f986";

    fetch(apiURLForecast)
      .then((response) => response.json())
      .then((jsObject) => {
        console.log(jsObject);
    
        const days = document.querySelectorAll("#day");
        const forecast = document.querySelectorAll("#forecast");
        const icon = document.querySelectorAll("#icon");
    
        const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    
        let day = 0;
        for (item of jsObject.list) {
          if (item.dt_txt.includes('18:00:00')) {
            const date = new Date(item.dt * 1000).getDay();
            const imagesrc = "https://openweathermap.org/img/w/" + item.weather[0].icon + ".png";
            const temperature = item.main.temp_max;
    
            days[day].innerHTML = week[date];
            forecast[day].innerHTML = temperature.toFixed(0);
            icon[day].setAttribute("src", imagesrc);
            day++;
          }
        }
      });