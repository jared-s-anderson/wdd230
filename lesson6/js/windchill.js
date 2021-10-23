let temp = parseFloat(document.getElementById('temperature').innerHTML);
let speed = parseFloat(document.getElementById('windspeed').innerHTML);
let windChill = 35.74  + (.6215 * temp) - (35.75 * Math.pow(speed, .16)) + (.4275 * temp * Math.pow(speed, .16));

if (temp <= 50.0 && speed > 3.0)
{
    document.getElementById('windchill').innerHTML = Math.ceil(windChill);
}

else
{
    document.getElementById('windchill').innerHTML = 'N/A';
}
