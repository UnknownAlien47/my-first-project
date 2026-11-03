const form = document.getElementById('loginForm');
const statusMessage = document.getElementById('statusMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const memberId = document.getElementById('memberId').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!memberId || !password) {
    statusMessage.textContent = 'Please fill in the demo fields before continuing.';
    statusMessage.style.color = '#f7d59c';
    return;
  }

  statusMessage.textContent = 'Demo mode only: credentials are not stored or transmitted. This is a local mockup.';
  statusMessage.style.color = '#9ad7b0';

  form.reset();
});
