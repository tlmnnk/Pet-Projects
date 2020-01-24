import '../css/style.css';
import './plugins';
import locations from './store/locations';
import formUI from './views/form';

document.addEventListener('DOMContentLoaded', () => {
  initApp();

  const form = formUI.form;
  //Events

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    onFormSubmit();
  });

  //handlers
  async function initApp() {
    console.log('Getting data.....');
    await locations.init();
    console.log('OK. Data recieved.');
    console.log(locations.createShortCitiesList(locations.cities));
    formUI.setAutocompleteData(locations.citiesAutocompleteList);
  }

  async function onFormSubmit() {
    // get data from inputs
  }
});