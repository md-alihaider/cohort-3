function authenticationState() {
  const registerLink = document.querySelector("#register-link");
  const loginLink = document.querySelector("#login-link");
  const loginContainer = document.querySelector(".login-container");
  const registerContainer = document.querySelector(".register-container");
  const loginForm = document.querySelector("#login-form");
  const registerForm = document.querySelector("#register-form");

  if (!registerLink || !loginLink || !loginContainer || !registerContainer) {
    return;
  }

  function showLoginForm() {
    registerContainer.classList.remove("active");
    loginContainer.classList.add("active");
    localStorage.setItem("currentForm", "login");
  }

  function showRegisterForm() {
    loginContainer.classList.remove("active");
    registerContainer.classList.add("active");
    localStorage.setItem("currentForm", "register");
  }

  function initFormState() {
    const currentForm = localStorage.getItem("currentForm");
    if (currentForm === "register") {
      showRegisterForm();
    } else {
      showLoginForm();
    }
  }

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(registerForm);
    const userData = Object.fromEntries(formData.entries());
    localStorage.setItem("registeredUser", JSON.stringify(userData));

    alert("Registration successful!");
    registerForm.reset();
    showLoginForm();
  });

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const formData = new FormData(loginForm);
    const loginAttempt = Object.fromEntries(formData.entries());
    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      savedUser &&
      savedUser.username === loginAttempt.username &&
      savedUser.password === loginAttempt.password
    ) {
      alert("Welcome back to FinTrack Pro!");
      // Proceed to dashboard...
    } else {
      alert("Invalid username or password.");
    }
  });

  registerLink.addEventListener("click", (event) => {
    event.preventDefault();
    showRegisterForm();
  });

  loginLink.addEventListener("click", (event) => {
    event.preventDefault();
    showLoginForm();
  });

  initFormState();
}

authenticationState();
