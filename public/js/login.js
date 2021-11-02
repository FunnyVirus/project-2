const loginFormHandler = async (event) => {
    event.preventDefault();  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/DMs/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Please make sure the credentials are correct.');
      }
    }
};

document
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler);