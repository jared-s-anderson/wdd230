const townURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(townURL)
  .then(function (response) {
    return response.json();
  })
 
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    for (let i = 0; i < 3; i++) 
    {
        let index = 0;
        let card = document.createElement('section');
        let town_data = document.createElement('div')
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let town_image = document.createElement('img');
        if (i == 1){
            index = 2;
        h2.textContent = towns[index].name;
        h3.textContent = towns[index].motto;
        p1.textContent = 'Year founded: ' + towns[index].yearFounded;
        p2.textContent = 'Current population: ' + towns[index].currentPopulation;
        p3.textContent = 'Average rainfal: ' + towns[index].averageRainfall;
        town_image.setAttribute('src', 'images/fishhaven.jpg');
        town_image.setAttribute('alt', h2.textContent);
        }
        else if (i == 2){
            index = 6;
        h2.textContent = towns[index].name;
        h3.textContent = towns[index].motto;
        p1.textContent = 'Year founded: ' + towns[index].yearFounded;
        p2.textContent = 'Current population: ' + towns[index].currentPopulation;
        p3.textContent = 'Average rainfal: ' + towns[index].averageRainfall;
        town_image.setAttribute('src', 'images/preston.jpg');
        town_image.setAttribute('alt', h2.textContent);
        
        }
        else if(i == 0){
            index = 0;
        h2.textContent = towns[index].name;
        h3.textContent = towns[index].motto;
        p1.textContent = 'Year founded: ' + towns[index].yearFounded;
        p2.textContent = 'Current population: ' + towns[index].currentPopulation;
        p3.textContent = 'Average rainfal: ' + towns[index].averageRainfall;
        town_image.setAttribute('src', 'images/sodasprings.jpg');
        town_image.setAttribute('alt', h2.textContent);
        }

        town_data.appendChild(h2);
        town_data.appendChild(h3);
        town_data.appendChild(p1);
        town_data.appendChild(p2);
        town_data.appendChild(p3);
        
        card.appendChild(town_data);
        card.appendChild(town_image);
        
        document.querySelector('div.cards').appendChild(card);
    }
  });