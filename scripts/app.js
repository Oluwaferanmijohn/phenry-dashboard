const registerBtn = document.querySelector('#register-btn');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');
let errorMessage = document.getElementById('error');

function register(evt) {
  evt.preventDefault();
  document.querySelector('.lds-spinner').style.display = 'inline-block';
  username = username.value;
  email = email.value;
  password = password.value;
  confirmPassword = confirmPassword.value;

  if (!username || !email || !password || !confirmPassword) {
    alert('All fields are required');
    document.querySelector('.lds-spinner').style.display = 'none';
    return;
  }
  let userObj = {
    username,
    email,
    password,
    confirmPassword,
  };

  console.log(userObj);
}

registerBtn.addEventListener('click', register);

username.addEventListener('focus', function () {
  errorMessage.textContent = '';
});

username.addEventListener('blur', function () {
  if (username.value.length < 5) {
    errorMessage.textContent = 'Username must be greater than 5 characters';
  }
});

username.addEventListener('keyup', function () {
  if (username.value.length >= 5) {
    errorMessage.textContent = 'valid';
    errorMessage.style.color = 'green';
  } else {
    errorMessage.textContent = 'invalid';
    errorMessage.style.color = 'red';
  }
});

email.addEventListener('keyup', function () {
  let emailMessage = document.getElementById('email-message');
  let emailMatch =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (emailMatch.test(email.value)) {
    emailMessage.textContent = 'Valid email';
    emailMessage.style.color = 'green';
  } else {
    emailMessage.textContent = 'Invalid email';
    emailMessage.style.color = 'red';
  }
});
