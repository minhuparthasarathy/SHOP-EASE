function showForm(type) {
  document.getElementById("registerForm").classList.add("hidden");
  document.getElementById("loginForm").classList.add("hidden");
  if (type === "register") document.getElementById("registerForm").classList.remove("hidden");
  else document.getElementById("loginForm").classList.remove("hidden");
}

function validateRegister() {
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const pass = document.getElementById("regPass").value.trim();

  if (!name || !email || !pass) {
    alert("All fields are required!");
  } else if (!email.includes("@") || !email.includes(".")) {
    alert("Enter a valid email address!");
  } else if (pass.length < 6) {
    alert("Password must be at least 6 characters!");
  } else {
    alert("Registration Successful!");
    document.getElementById("registerForm").reset;
  }
}

function validateLogin() {
  const email = document.getElementById("logEmail").value.trim();
  const pass = document.getElementById("logPass").value.trim();

  if (!email || !pass) {
    alert("Please fill all fields!");
  } else if (!email.includes("@") || !email.includes(".")) {
    alert("Invalid email!");
  } else {
    alert("Login Successful!");
  }
}
