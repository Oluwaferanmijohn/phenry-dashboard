const registerBtn = document.querySelector('#register-btn')
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
    if (!email.value || !password.value || !confirmPassword) {
        alert('Please enter a valid email and password.');
        return;
    }
    console.log(email.value)
    console.log(password.value)
}
registerBtn.addEventListener('click', register);