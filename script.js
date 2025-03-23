// Ganti URL ini dengan URL Web App yang Anda dapatkan dari Google Apps Script
const scriptURL = 'GANTI_DENGAN_URL_WEB_APP_ANDA';

const form = document.getElementById('submit-form');
const formContainer = document.getElementById('form-container');
const loadingElement = document.getElementById('loading');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Tampilkan loading
    form.classList.add('hidden');
    loadingElement.classList.remove('hidden');
    
    // Kirim data form ke Google Sheets
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => response.json())
        .then(data => {
            console.log('Success!', data);
            loadingElement.classList.add('hidden');
            successMessage.classList.remove('hidden');
        })
        .catch(error => {
            console.error('Error!', error.message);
            loadingElement.classList.add('hidden');
            errorMessage.classList.remove('hidden');
        });
});

function resetForm() {
    // Reset form
    form.reset();
    
    // Sembunyikan pesan dan tampilkan form
    successMessage.classList.add('hidden');
    errorMessage.classList.add('hidden');
    form.classList.remove('hidden');
}
