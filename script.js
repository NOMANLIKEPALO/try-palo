// ===== LOGIN =====
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword) {
      window.location.href = "home.html";
    } else {
      alert("Invalid email or password");
    }
  });
}


// ===== SIGNUP =====
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = signupForm.querySelector('input[placeholder="Mobile number or email address"]').value;
    const password = signupForm.querySelector('input[placeholder="New password"]').value;

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Account created successfully! Now log in.");

    window.location.href = "index.html";
  });
}


// ===== LOGOUT =====
function logout() {
  window.location.href = "index.html";
}
