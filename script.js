// ================= SIGN UP =================
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    // save user
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Account created successfully!");

    // go back to login page
    window.location.href = "index.html";
  });
}


// ================= LOGIN =================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword) {
      window.location.href = "home.html";
    } else {
      alert("Invalid email or password");
    }
  });
}