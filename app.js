/* Imports */

/* Get DOM Elements */
const cityHeader = document.getElementById('city-header');
const cityClimate = document.getElementById('climate-image');
const cityArchitecture = document.getElementById('architecture-image');
const cityAttractions = document.getElementById('attractions-list');
// const nameInput = document.getElementById('name-input');
// const climateSelect = document.getElementById('climate-select');
// const architectureSelect = document.getElementById('architecture-select');
//const attractionInput = document.getElementById('attraction-input');

/* State */
let city = {
    name: 'Paradise City',
    climate: 'mediterranean',
    architecture: 'modern',
    attractions: [],
};

/* Events */

/* Display Functions */
function displayCity() {
    // add themes and fonts
    cityHeader.textContent = city.name;
    cityClimate.src = 'assets/' + city.climate + '.jpeg';
    cityArchitecture.src = 'assets/' + city.architecture + '.jpeg';
}

// (don't forget to call any display functions you want to run on page load!)

displayCity();
