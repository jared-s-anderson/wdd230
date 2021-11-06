const millisecondsToDays = 8640000;

const lastVisit = localStorage.getItem('last_visit');
console.log(lastVisit);

console.log(Date.now());

let currentVisit = Math.floor(Date.now() / millisecondsToDays);

let daysSinceVisit = currentVisit - lastVisit;

localStorage.setItem('last_visit', currentVisit);
console.log(currentVisit);

if (lastVisit != null)
{
    document.querySelector('#last-visit').textContent = daysSinceVisit;
}

else
{
    document.querySelector('#last-visit').textContent = 0;
}