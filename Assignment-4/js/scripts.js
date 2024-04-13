// Initializing the url variable with API link
// Initializing button and p tag for student ID / Name 
const url = "https://restcountries.com/v3.1/all?fields=name,flags,population,continents,capital";
const button = document.querySelector("button");
const pTag = document.querySelector("#studentInfo");

// Fetch request and sending response to Response function 
fetch(url).then(response => {
    return response.json();
}).then(json => Response(json))

// Function takes response as a parameter and uses it to display API info
function Response(response){
    // Main div where all the country info is placed
    const mainDiv = document.querySelector("#main");

    // Creates a div & info for every country 
    for (i in response){
        // All varaibles for storing country info
        let div = document.createElement("div");
        const name = document.createElement('h2');
        const flags = document.createElement('img');
        const population = document.createElement('p');
        const continent = document.createElement('p');
        const capital = document.createElement('p');

        // Gets value from API and assigns to varaibles
        name.textContent = response[i]["name"]["common"];
        flags.src = response[i]["flags"]["png"];
        population.textContent = "Population: " + response[i]["population"];
        continent.textContent = "Continent: " + response[i].continents;
        capital.textContent =  "Capital: "+ response[i].capital;

        // Appends all variables to one div 
        div.appendChild(name);
        div.appendChild(flags);
        div.appendChild(capital);
        div.appendChild(continent);
        div.appendChild(population);

        // Appends div containing all the countries data to main div
        mainDiv.appendChild(div);
    }
}

// Displays info to main index page
function displayInfo(){
    pTag.textContent = "Andrew Murgan - 200589802";
}

// Event listener for button on nav to display student info
button.addEventListener("click",  displayInfo);