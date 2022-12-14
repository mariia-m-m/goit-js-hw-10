
const BASE_URL=`https://restcountries.com/v3.1/`


function fetchCountries(name) {
    return fetch(`${BASE_URL}/name/${name}?fields=name.official,capital,population,flags.svg,languages`)
        .then(response => { return response.json() });
}

export {fetchCountries};