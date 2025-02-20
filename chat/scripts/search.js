import {renderSearchedContacts} from './contact.js';
import {addContactListener} from './script.js';

const inputElement = document.querySelector('.js-input');

inputElement.addEventListener('keydown', (event) => {
    let name = inputElement.value;
    renderSearchedContacts(name)
    addContactListener();
});