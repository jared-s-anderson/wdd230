let currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

let mod = document.lastModified;
document.getElementById('modified').innerHTML = mod;
