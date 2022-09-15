/* Imports */

/* Get DOM Elements */
// DOM for displayCity
const cityHeader = document.getElementById('city-header');
const cityClimate = document.getElementById('climate-image');
const cityArchitecture = document.getElementById('architecture-image');
const attractionsList = document.getElementById('attractions-list');
const articleDisplay = document.getElementById('city-article');
// DOM for control events
const nameInput = document.getElementById('name-input');
const climateSelect = document.getElementById('climate-select');
const architectureSelect = document.getElementById('architecture-select');
const attractionInput = document.getElementById('attraction-input');
const addAttractionButton = document.getElementById('add-attraction-button');

/* State */
let city = {
    name: 'Paradise City',
    climate: 'tropical',
    architecture: 'baroque',
    attractions: [],
};

/* Events */
nameInput.addEventListener('input', () => {
    city.name = nameInput.value;
    displayCity();
});

climateSelect.addEventListener('change', () => {
    city.climate = climateSelect.value;
    // change article background
    displayCity();
});

architectureSelect.addEventListener('change', () => {
    city.architecture = architectureSelect.value;
    displayCity();
});

addAttractionButton.addEventListener('click', () => {
    const attraction = attractionInput.value;
    city.attractions.push(attraction);
    displayAttractions();
    attractionInput.value = '';
});

/* Display Functions */
function displayCity() {
    // add themes and fonts
    cityHeader.textContent = city.name;
    cityClimate.src = 'assets/' + city.climate + '.jpeg';
    cityArchitecture.src = 'assets/' + city.architecture + '.jpeg';
}

function displayAttractions() {
    attractionsList.innerHTML = '';

    for (let attraction of city.attractions) {
        const li = document.createElement('li');
        li.textContent = attraction;
        attractionsList.append(li);
    }
}

// (don't forget to call any display functions you want to run on page load!)

displayCity();
displayAttractions();
