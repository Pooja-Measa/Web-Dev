document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from submitting normally

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Simple email regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation checks
  if (!email || !password) {
    alert('Please fill in all fields.');
    return;
  }

  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Simulated login check (replace with real authentication)
  const validEmail = "user@example.com";
  const validPassword = "password123";

  if (email === validEmail && password === validPassword) {
    alert('Login successful!');
  } else {
    alert('Invalid email or password.');
  }
});
