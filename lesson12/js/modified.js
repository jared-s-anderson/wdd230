/*const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const time = new Date();
const option = {weekday: "long", year: "numeric", month: "long", day: "numeric"};

date.textContent = time.toLocaleDateString('en-UK', option);
*/

let weekDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

let monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

let currentDate = new Date();
let day = weekDay[currentDate.getDay()];
let month = monthNames[currentDate.getMonth()];
let year = currentDate.getFullYear();
let fullDate = `${day}, ${currentDate.getDate()}, ${month} ${year}`;

document.getElementById('fullDate').innerHTML = fullDate;
