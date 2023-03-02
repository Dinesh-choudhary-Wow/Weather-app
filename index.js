import utils from './utils/utils.js';



const searchButton = document.querySelector('#query-button');
const searchInput = document.querySelector('#query-input');
const weatherCard = document.querySelector('.weather-card');


console.log(searchInput)
utils.queryLocation(searchButton,searchInput,weatherCard);