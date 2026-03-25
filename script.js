<script>

// LOGIN -> HOME
const loginForm = document.getElementById("loginForm");
if(loginForm){
  loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    window.location.href = "home.html";
  });
}

// SIGNUP -> HOME
const signupForm = document.getElementById("signupForm");
if(signupForm){
  signupForm.addEventListener("submit", function(e){
    e.preventDefault();
    window.location.href = "home.html";
  });
}

function goToSignup(){
  window.location.href = "signup.html";
}

function logout(){
  window.location.href = "index.html";
}

</script>