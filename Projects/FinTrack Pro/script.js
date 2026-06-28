function authenticationState() {
  const registerLink = document.querySelector("#register-link");
  const loginLink = document.querySelector("#login-link");
  const loginContainer = document.querySelector(".login-container");
  const registerContainer = document.querySelector(".register-container");

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
