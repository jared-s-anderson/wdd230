const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const time = new Date();
const option = {weekday: "long", year: "numeric", month: "long", day: "numeric"};

date.textContent = time.toLocaleDateString('en-UK', option);