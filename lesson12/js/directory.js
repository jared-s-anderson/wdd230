const path = "directory/directory_data.json";

fetch(path)
    .then((response) => response.json())
    .then((jsonObject) => {
        const businesses = jsonObject.businesses;
        businesses.forEach((business) => {
            let card = document.createElement("div");
            let name = document.createElement("h3");
            let address = document.createElement("p");
            let description = document.createElement("p");
            let logo = document.createElement("img");
            let descWrap = document.createElement("div");
            let level = document.createElement("p");
            let phone = document.createElement("a");
            let email = document.createElement("a");
            let website = document.createElement("a");
            let div = document.createElement("div");

            name.textContent = business.name;
            logo.setAttribute("src", "images/" + business.logo);
            logo.setAttribute("alt", business.name);
            address.textContent = business.address;
            phone.textContent = business.phone;
            email.textContent = business.email;
            website.textContent = business.website;
            website.href = business.website;
            description.textContent = business.description;
            level.textContent = "Level: " + business.level;

            div.appendChild(name);
            descWrap.appendChild(logo);
            div.appendChild(descWrap);
            div.appendChild(description);
            div.appendChild(address);
            div.appendChild(phone);
            div.appendChild(email);
            div.appendChild(website);
            div.appendChild(level);

            card.appendChild(div);
            card.classList.add("card");
            document.getElementById("businesses").appendChild(card);
        });
    });

const gridbutton = document.getElementById("grid-button");
const listbutton = document.getElementById("list-button");
const businesses = document.getElementById("businesses");

gridbutton.addEventListener("click", function() {
    businesses.classList.add("grid");
});

listbutton.addEventListener("click", function() {
    businesses.classList.remove("grid");
});