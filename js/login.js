// get email and password
document.getElementById('login-button').addEventListener('click', function () {
    const emailField = document.getElementById('email-input');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('password-input');
    const userPassword = passwordField.value;
    if (userEmail == 'amdadul@gmail.com' && userPassword == 'hot420') {
        window.location.href = 'bank.html'
    }
});