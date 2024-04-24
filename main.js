let root = document.querySelector("#root");
let button = document.querySelector("#fetchBtn");
let sortingData = document.querySelector("#sortingData");
let countryData = null;

// EventListener for fetching data
button.addEventListener("click", getData);

// EventListener for sorting data
sortingData.addEventListener("change", handleSortChange);

// Function to handle sort change event
function handleSortChange() {
    let selectedOption = sortingData.value;
    if (selectedOption === "desc") {
        sortDesc();
    } else if (selectedOption === "asc") {
        sortAsec();
    }
}
async function getData() {

    if (!countryData) { 
        let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`);
        countryData = await res.json();
        console.log(countryData.data);
        displayData(countryData.data);
    }
}

function displayData(countries) {
    root.innerHTML = "";
    countries.forEach((country) => {
        // card creation
        let card = document.createElement("div");
        card.className = "card";
        
        // Country name creation
        let countryName = document.createElement("h2");
        countryName.textContent = `Country: ${country.country}`;
        countryName.className = "countryName";

        // Rank creation
        let rank = document.createElement("p");
        rank.textContent = `Rank: ${country.Rank}`;
        rank.className = "rank";

        // Population creation
        let population = document.createElement("h4");
        population.textContent = `Population: ${country.population}`;
        population.className = "population";

        // appending to card
        card.append(countryName,rank,population);

        // appending to root
        root.append(card);
    })
    
}

async function sortDesc () {
    let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=desc`);
    let countryData = await res.json();
    displayData(countryData.data);

}

async function sortAsec () {
    let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=asc`);
    let countryData = await res.json();
    displayData(countryData.data);

}