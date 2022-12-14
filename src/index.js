import './css/styles.css';

import { fetchCountries } from "./js/fetchCountries";

var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const input = document.querySelector("input#search-box");


input.addEventListener("keyup", onSubmit)


function onSubmit(evt) {

    evt.preventDefault()
    
    const inputValue = input.value;


fetchCountries("Ukraine")
        .then(country => { console.log(country) })
    .catch(error => { console.log(error) })
    
    _.debounce(
    () => {
      console.log("Keyup handler call on every event stream start");
    },
    300,)
}