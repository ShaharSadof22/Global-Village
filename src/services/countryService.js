// import httpService from './httpService';
import storageService from "./storageService";

export const countryService = {
  query,
  loadCountry,
};

// const countries = require ('../countryData.json')

function query() {
  // localStorage.setItem('country', JSON.stringify(countries))
  return storageService.query("country");
  // return httpService.get(`country`);
}

function loadCountry(entityCode) {
  return storageService.get("country", entityCode);
  // return httpService.get(`country/${countryId}`)
}

// function update(country) {
//   return httpService.put(`country/${country._id}`, country);
// }

// function create() {
//   const country = _createCountry()
//   return httpService.post(`country`, country);
// }

// function _createCountry() {
// }

function makeId(length = 5) {
  var txt = "";
  var possible = "0123456789abcdefgABCDEFG";
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}
