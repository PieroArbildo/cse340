/*Show and Hide Password*/

const pswdBtn = document.getElementById('pswdBtn');
const passwordInput = document.getElementById('accountPassword');

pswdBtn.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        pswdBtn.textContent = 'Hide Password';
    } else {
        passwordInput.type = 'password';
        pswdBtn.textContent = 'Show Password';
    }
});