const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const statusMessage = document.getElementById('statusMessage');
const signupStatus = document.getElementById('signupStatus');

if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const memberId = document.getElementById('memberId')?.value.trim();
    const password = document.getElementById('password')?.value.trim();

    if (!memberId || !password) {
      statusMessage.textContent = 'Please complete the demo fields before continuing.';
      statusMessage.style.color = '#f6d89d';
      return;
    }

    statusMessage.textContent = 'Demo login accepted. This mockup does not process or store real credentials.';
    statusMessage.style.color = '#8bd4a3';

    window.location.href = 'dashboard.html';
  });
}

if (signupForm) {
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (signupStatus) {
      signupStatus.textContent = 'Demo account created. This is a fictional UI only and does not capture real account data.';
      signupStatus.style.color = '#8bd4a3';
    }

    signupForm.reset();
  });
}

const primaryButton = document.querySelector('.primary-btn');
if (primaryButton && !document.getElementById('loginForm')) {
  primaryButton.addEventListener('click', () => {
    if (window.location.pathname.endsWith('dashboard.html')) {
      window.location.href = 'index.html';
    }
  });
}

const logoutBtn = document.querySelector('.ghost-btn');
if (logoutBtn && window.location.pathname.endsWith('dashboard.html')) {
  logoutBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}
