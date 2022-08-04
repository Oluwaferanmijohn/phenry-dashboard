const registerBtn = document.querySelector('#register-btn')
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let confirmPassword = document.getElementById('confirmPassword')
const errorMessage = document.getElementById('errorMessage')


// registerBtn.addEventListener('click', function(evt) {
//         evt.preventDefault();
//         console.log()
//     })
//     // or 


function register(evt) {
    username = username.value;
    email = email.value;
    password = password.value;
    confirmPassword = confirmPassword.value
    evt.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
        alert('Please enter all credentials');
        return;
    }
    if (password != confirmPassword) {
        alert('Passwords do not match');
        return;

    }
    if (password.length <= 7) {
        alert('enter at least 8 values of password');
        return;

    }
    let userObj = {
        // username,
        email,
        password,
        // confirmPassword,
    };

    console.log(userObj)
        // console.log(email.value)
        // console.log(password.value)
        // console.log(confirmPassword.value)

    fetch('https://test-kinplus.herokuapp.com/api/v1/users/register', {

    })
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