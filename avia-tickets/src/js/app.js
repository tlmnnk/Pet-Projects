import '../css/style.css';
import './plugins';
import locations from './store/locations';
import formUI from './views/form';

document.addEventListener('DOMContentLoaded', () => {
  initApp();

  //Events

  //handlers
  async function initApp() {
    console.log('Getting data.....');
    await locations.init();
    console.log('OK. Data recieved.');
    console.log(locations.createShortCitiesList(locations.cities));
    formUI.setAutocompleteData(locations.citiesAutocompleteList);
  }
});