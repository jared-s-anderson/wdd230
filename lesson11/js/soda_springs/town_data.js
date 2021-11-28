const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsObject) {
        const towns = jsObject['towns'];
        for (let i = 0; i < towns.length; i++)
        {
            if (towns[i].name == 'Soda Springs')
            {
                let events = towns[i].events;
                for (let i = 0; i < events.length; i++)
                {
                    let event_element = document.createElement('p');
                    event_element.innerHTML = events[i];
                    document.querySelector('.ss-events').appendChild(event_element);
                }
            }
        }
    });