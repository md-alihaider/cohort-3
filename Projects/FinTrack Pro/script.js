function authenticationState() {
  const registerLink = document.querySelector("#register-link");
  const loginLink = document.querySelector("#login-link");
  const loginContainer = document.querySelector(".login-container");
  const registerContainer = document.querySelector(".register-container");
  const loginForm = document.querySelector("#login-form");
  const registerForm = document.querySelector("#register-form");
  const toast = document.querySelector("#toast");
  const app = document.querySelector(".app-container");
  const logoutBtn = document.querySelector("#logoutBtn");
  const topbarName = document.querySelector("#topbarName");

  // Update the helper function inside authenticationState()
  function showToast(message, type = "success") {
    toast.textContent = message;
    toast.classList.remove("success", "error");
    toast.classList.add(type, "show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

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
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      showApp();
    } else {
      const currentForm = localStorage.getItem("currentForm");
      if (currentForm === "register") {
        showRegisterForm();
      } else {
        showLoginForm();
      }
    }
  }

  function showApp() {
    loginContainer.classList.remove("active");
    localStorage.removeItem("currentForm");
    app.classList.add("active");
  }

  function updateTopbarName() {
    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (savedUser && savedUser.username && topbarName) {
      topbarName.textContent = savedUser.username;
    }
  }

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(registerForm);
    const userData = Object.fromEntries(formData.entries());
    localStorage.setItem("registeredUser", JSON.stringify(userData));

    showToast("Account created successfully! 🎉", "success");
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
      showToast("Welcome back to FinTrack Pro! 🚀", "success");
      // Proceed to dashboard...
      localStorage.setItem("isLoggedIn", "true");
      showApp();
      updateTopbarName();
      loginForm.reset();
    } else {
      showToast("Invalid username or password. ❌", "error");
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

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    location.reload(); // Reload the page to reset the state and hide the app container
  });

  initFormState();
}

authenticationState();
