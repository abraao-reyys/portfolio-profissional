const cv_button = window.document.getElementById('cv-button');
const contact_button = window.document.getElementById('contact-button');

cv_button.addEventListener('click', aviso);
contact_button.addEventListener('click', aviso);

function aviso() {
    window.alert('Calma, meu chapa. Sua hora vai chegar.')
}