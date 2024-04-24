let root = document.querySelector("#root");
let button = document.querySelector("#fetchBtn");

button.addEventListener("click", getData);

async function getData() {

let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`);
let countryData = await res.json();
console.log(countryData.data);
displayData(countryData.data);

}

function displayData(countries) {
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

function sortDesc () {


}

function sortAsc () {

}