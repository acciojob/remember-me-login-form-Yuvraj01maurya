//your JS code here. If required.
    const existingUsername = localStorage.getItem('username');
    const existingPassword = localStorage.getItem('password');

    // If details exist, show a button to login as an existing user
    if (existingUsername && existingPassword) {
      const existingButton = document.createElement('button');
      existingButton.id = 'existing';
      existingButton.textContent = 'Login as existing user';
      existingButton.addEventListener('click', () => {
        alert(`Logged in as ${existingUsername}`);
      });
      document.body.appendChild(existingButton);
    }

    // Event listener for the form submission
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();

      // Get values from form fields
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const rememberMeCheckbox = document.getElementById('checkbox');

      // Save details to local storage if the checkbox is checked
      if (rememberMeCheckbox.checked) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        // Remove details from local storage if the checkbox is unchecked
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }

      // Show alert with the logged-in username
      alert(`Logged in as ${username}`);
    });