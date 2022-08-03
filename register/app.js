const registerBtn = document.querySelector('#register-btn')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')


// registerBtn.addEventListener('click', function(evt) {
//         evt.preventDefault();
//         console.log()
//     })
//     // or 


function register(evt) {
    evt.preventDefault();
    if (!username.value || !email.value || !password.value || !confirmPassword) {
        alert('Please enter all credentials');
        return;
    }
    if (password.value != confirmPassword.value) {
        alert('Passwords do not match');
        return;

    }
    if (password.value.length <= 7) {
        alert('enter at least 8 values of password');
        return;

    }
    console.log(username.value)
    console.log(email.value)
    console.log(password.value)
    console.log(confirmPassword.value)
}
registerBtn.addEventListener('click', register);