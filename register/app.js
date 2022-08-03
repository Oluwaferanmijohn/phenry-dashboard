const registerBtn = document.querySelector('#register-btn')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const errorMessage = document.getElementById('errorMessage')


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


username.addEventListener('focus', function() {
    errorMessage.textContent = '';
})
username.addEventListener('blur', function() {
    if (username.value.length < 5) {
        errorMessage.textContent = '❗Enter a valid username';
        errorMessage.style.color = 'red'
        errorMessage.style.fontSize = '0.7em'
    }

})

username.addEventListener('keyup', function() {
    if (username.value.length >= 5) {
        errorMessage.textContent = '✔valid username';
        errorMessage.style.color = 'green'
    } else {
        errorMessage.textContent = '❌invalid username';
        errorMessage.style.color = 'red'
    }
})
email.addEventListener('keyup', function() {
        let emailMessage = document.getElementById('email-message');
        let emailMatch = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (emailMatch.test(email.value)) {
            emailMessage.textContent = '✔Valid email';
            emailMessage.style.color = 'green';
        } else {
            emailMessage.textContent = ' ❌Invalid email';
            emailMessage.style.color = 'red';
        }
    })
    // registerBtn.addEventListener('click', function() {
    //     const loader = document.getElementsByClassName('loader')
    //     loader.style.display = "block"
    // })






// how top put all the value in an object 
// let userObj = {
//     username,
//     email,
//     password,
//     confirmPassword,
// }
// console.log(userObj)