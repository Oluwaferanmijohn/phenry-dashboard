const registerBtn = document.querySelector('#register-btn');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');
// let errorMessage = document.getElementById('error');

function register(evt) {
  evt.preventDefault();
  registerBtn.textContent = 'Registering...';
  username = username.value;
  email = email.value;
  password = password.value;
  confirmPassword = confirmPassword.value;

  if (!username || !email || !password || !confirmPassword) {
    alert('All fields are required');
    return;
  }
  let userObj = {
    username,
    email,
    password,
    confirmPassword,
  };

  username.value = '';
  password.value = '';
  email.value = '';
  confirmPassword.value = '';

  fetch('http://localhost:4000/api/v1/users/register', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain,*/*',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(userObj),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      if (!result.status) {
        throw new Error(result.message);
      }
      document.querySelector('.message').textContent = result.message;
    })
    .catch(function (error) {
      document.querySelector('.message').textContent = error.message;
    });
}

registerBtn.addEventListener('click', register);

// fetch API
// fetch('../tes.json')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log(error.message);
//   });

// email.addEventListener('keyup', function () {
//   let emailMessage = document.getElementById('email-message');
//   let emailMatch =
//     /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//   if (emailMatch.test(email.value)) {
//     emailMessage.textContent = 'Valid email';
//     emailMessage.style.color = 'green';
//   } else {
//     emailMessage.textContent = 'Invalid email';
//     emailMessage.style.color = 'red';
//   }
// });
