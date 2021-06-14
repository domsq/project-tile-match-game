// Logic to open and close the modals, guidance from https://www.w3schools.com/howto/howto_css_modals.asp

// To open / close the rules page
function openRulesPage() {
    document.getElementById('rules-page').style.display = 'block';
}

function closeRulesPage() {
    document.getElementById('rules-page').style.display = 'none';
}

// To open / close the contact us page
function openContactPage() {
    document.getElementById('contact-page').style.display = 'block';
}

document.getElementById('contact').addEventListener('click', openContactPage);

function closeContactPage() {
    document.getElementById('contact-page').style.display = 'none';
}

document.getElementById('close-contact').addEventListener('click', closeContactPage);

// Handle data input on contact us page

function clearForm(event) {
    event.preventDefault();
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('comments').value = '';
    alert('Thanks for getting in touch!');
    closeContactPage();
}

document.getElementById('contact-form').addEventListener('submit', clearForm);