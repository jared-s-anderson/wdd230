const banner = document.getElementById("banner");
const no_show = document.getElementById("no-show");

let alert;


function displayAlerts() {
    if (alert) {
        banner.classList.remove("hide");
        const info = document.createElement("p");
        info.textContent = alert[0].description;
        banner.appendChild(info);
    }
    else {
        banner.classList.add("hide");
    }
}

displayAlerts();

no_show.addEventListener("click", function() {
    banner.classList.add("hide");
})