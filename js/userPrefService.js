'use strict'
var gPrefs = [];



function formSubmit(event) {


    saveToStorage('gPrefs', gPrefs);

}


function loadPrefs() {
    gPrefs = loadFromStorage('prefs', []);
}



const form = document.querySelector('frmPrefs')
form.addEventListener('submit', event => {
    // submit event detected
    alert();
    event.preventDefault()
})