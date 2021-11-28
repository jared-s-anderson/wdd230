const apiURLForecast = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=0efbfc14fa861e0ae067b5f38772f986";

fetch(apiURLForecast)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const days = document.querySelectorAll("#day1, #day2, #day3, #day4, #day5");
    const forecast = document.querySelectorAll("#forecast1, #forecast2, #forecast3, #forecast4, #forecast5");
    const icon = document.querySelectorAll("#icon1, #icon2, #icon3, #icon4, #icon5");

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
