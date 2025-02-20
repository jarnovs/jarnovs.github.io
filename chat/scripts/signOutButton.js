import {addContactListener} from './script.js';
signOutButton = document.querySelector('.js-sign_out_btn');

signOutButton.addEventListener('click', () => {
    location.href = "/login/"
    addContactListener();
});