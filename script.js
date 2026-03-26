<script>

// LOGIN -> HOME
const loginForm = document.getElementById("loginForm");
if(loginForm){
  loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    // get input values
    const inputs = loginForm.querySelectorAll("input");
    const email = inputs[0].value;
    const password = inputs[1].value;

    // get saved account
    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    // check if account exists
    if (email === savedEmail && password === savedPassword) {
      window.location.href = "home.html";
    } else {
      alert("Invalid email or password");
    }
  });
}

// SIGNUP -> SAVE ACCOUNT -> HOME
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = signupForm.querySelectorAll("input");
    const email = inputs[2].value;
    const password = inputs[3].value;

    // save account in browser
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Account created successfully! You can now log in.");

    window.location.href = "index.html";
  });
}

function logout() {
  window.location.href = "index.html";

</script>