const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const button = document.getElementById('submitButton');

email.addEventListener('input', () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('I am expecting an email address!');
  } else {
    email.setCustomValidity('');
  }
});

password.addEventListener('input', () => {
  if (password.value.length >= 8) {
    password.setCustomValidity('');
  } else {
    password.setCustomValidity('Password should have at least 8 characters.');
  }
});

confirmPassword.addEventListener('input', () => {
  if (confirmPassword.value.length >= 8) {
    confirmPassword.setCustomValidity('');
  } else {
    confirmPassword.setCustomValidity(
      'Password should have at least 8 characters.'
    );
  }
});

button.addEventListener('click', (event) => {
  if (
    password.validity.valid &&
    confirmPassword.validity.valid &&
    password.value === confirmPassword.value
  ) {
    button.style.backgroundColor = 'green';
    button.textContent = 'Welcome!';
  } else {
    button.textContent = 'The passwords do not match!';
    button.style.backgroundColor = 'red';
    password.value = '';
    confirmPassword.value = '';
  }

  event.preventDefault();
});
