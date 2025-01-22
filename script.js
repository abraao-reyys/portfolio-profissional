const cv_button = window.document.getElementById('cv-button');
const contact_button = window.document.getElementById('contact-button');
const menu_button = window.document.getElementById('menu-button');

cv_button.addEventListener('click', aviso);
contact_button.addEventListener('click', aviso);
menu_button.addEventListener('click', aviso);

function aviso() {
    window.alert('Mas já quer me usar? voo nadaa')
}