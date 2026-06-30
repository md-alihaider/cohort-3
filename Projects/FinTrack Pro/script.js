// Global State & Utilities
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
let cashFlowChartInstance = null;
let editIndex = null;
const toast = document.querySelector("#toast");

function showToast(message, type = "success") {
  if (!toast) return;
  toast.textContent = message;
  toast.className = `toast ${type} show`; // Assumes base .toast class exists
  setTimeout(() => toast.classList.remove("show"), 3000);
}

// Authentication
function initAuth() {
  const elements = {
    registerLink: document.querySelector("#register-link"),
    loginLink: document.querySelector("#login-link"),
    loginContainer: document.querySelector(".login-container"),
    registerContainer: document.querySelector(".register-container"),
    loginForm: document.querySelector("#login-form"),
    registerForm: document.querySelector("#register-form"),
    app: document.querySelector(".app-container"),
    logoutBtn: document.querySelector("#logoutBtn"),
    topbarName: document.querySelector("#topbarName"),
  };

  if (!elements.loginContainer || !elements.registerContainer) return;

  const switchForm = (formType) => {
    elements.loginContainer.classList.toggle("active", formType === "login");
    elements.registerContainer.classList.toggle(
      "active",
      formType === "register",
    );
    localStorage.setItem("currentForm", formType);
  };

  const showApp = () => {
    elements.loginContainer.classList.remove("active");
    elements.registerContainer.classList.remove("active");
    elements.app.classList.add("active");
    localStorage.removeItem("currentForm");

    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (savedUser?.username && elements.topbarName) {
      elements.topbarName.textContent = savedUser.username;
    }
    renderDashboard();
  };

  // State check on load
  if (localStorage.getItem("isLoggedIn") === "true") {
    showApp();
  } else {
    switchForm(localStorage.getItem("currentForm") || "login");
  }

  // Events
  elements.registerLink?.addEventListener("click", (e) => {
    e.preventDefault();
    switchForm("register");
  });
  elements.loginLink?.addEventListener("click", (e) => {
    e.preventDefault();
    switchForm("login");
  });

  elements.registerForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const userData = Object.fromEntries(new FormData(elements.registerForm));
    localStorage.setItem("registeredUser", JSON.stringify(userData));
    showToast("Account created.", "success");
    elements.registerForm.reset();
    switchForm("login");
  });

  elements.loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const loginAttempt = Object.fromEntries(new FormData(elements.loginForm));
    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      savedUser?.username === loginAttempt.username &&
      savedUser?.password === loginAttempt.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      showToast("Logged in.", "success");
      elements.loginForm.reset();
      showApp();
    } else {
      showToast("Invalid credentials.", "error");
    }
  });

  elements.logoutBtn?.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    location.reload();
  });
}

// Chart Logic
function updateChartData(income, expense) {
  const ctx = document.getElementById("cashFlowChart");
  if (!ctx) return;
  if (cashFlowChartInstance) cashFlowChartInstance.destroy();

  cashFlowChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Cash Flow"],
      datasets: [
        {
          label: "Income",
          data: [income],
          backgroundColor: "#166534",
          borderRadius: 4,
        },
        {
          label: "Expenses",
          data: [expense],
          backgroundColor: "#991b1b",
          borderRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { display: false } },
        y: {
          beginAtZero: true,
          ticks: { callback: (val) => "$" + val.toLocaleString() },
        },
      },
    },
  });
}

// Dashboard & Table Logic
function renderDashboard() {
  let income = 0,
    expense = 0;
  transactions.forEach((t) =>
    t.type === "income"
      ? (income += parseFloat(t.amount))
      : (expense += parseFloat(t.amount)),
  );

  const safeSet = (id, val) => {
    const el = document.querySelector(id);
    if (el) el.textContent = val;
  };
  safeSet("#displayBalance", `$${(income - expense).toFixed(2)}`);
  safeSet("#displayIncome", `$${income.toFixed(2)}`);
  safeSet("#displayExpense", `$${expense.toFixed(2)}`);
  safeSet("#displayCount", transactions.length);

  updateChartData(income, expense);
  renderTable();
}

function renderTable() {
  const tableBody = document.querySelector("#transactionTableBody");
  if (!tableBody) return;

  const keyword =
    document.querySelector("#searchInput")?.value.toLowerCase().trim() || "";
  const selectedType = document.querySelector("#typeFilter")?.value || "all";
  let html = "";

  transactions.forEach((t, index) => {
    const matchSearch =
      t.description.toLowerCase().includes(keyword) ||
      t.category.toLowerCase().includes(keyword);
    const matchType = selectedType === "all" || t.type === selectedType;

    if (matchSearch && matchType) {
      const amt = parseFloat(t.amount).toFixed(2);
      const isInc = t.type === "income";
      const color = isInc ? "var(--green-text)" : "var(--red-text)";

      html += `
        <tr>
          <td>${t.date}</td>
          <td>${t.description}</td>
          <td><span class="badge">${t.category}</span></td>
          <td style="font-weight: 600; color: ${color};">${isInc ? "+" : "-"}$${amt}</td>
          <td>
            <button onclick="editTransaction(${index})" style="background:none; border:none; color:var(--primary-blue-text); cursor:pointer;"><i class="fa-solid fa-pen-to-square"></i></button>
            <button onclick="deleteTransaction(${index})" style="background:none; border:none; color:var(--red-text); cursor:pointer;"><i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>`;
    }
  });

  tableBody.innerHTML =
    html ||
    `<tr><td colspan="5" style="text-align:center;">No records.</td></tr>`;
}

// Data Operations
function deleteTransaction(index) {
  transactions.splice(index, 1);
  saveAndRender();
}

function editTransaction(index) {
  const t = transactions[index];
  editIndex = index;

  document.querySelector("#txDescription").value = t.description;
  document.querySelector("#txAmount").value = t.amount;
  document.querySelector("#txType").value = t.type;
  document.querySelector("#txCategory").value = t.category;
  document.querySelector("#txDate").value = t.date;

  const modalTitle = document.querySelector("#modalTitle");
  if (modalTitle) modalTitle.textContent = "Edit Record";
  document.querySelector("#transactionModal")?.classList.add("active");
}

function saveAndRender() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
  renderDashboard();
}

// Modal & Interactions
function initModal() {
  const modal = document.querySelector("#transactionModal");
  const form = document.querySelector("#transactionForm");

  document.querySelector("#openAddModalBtn")?.addEventListener("click", () => {
    document.querySelector("#txDate").value = new Date()
      .toISOString()
      .split("T")[0];
    document.querySelector("#modalTitle").textContent = "Add Record";
    modal?.classList.add("active");
  });

  const closeModal = () => {
    modal?.classList.remove("active");
    form?.reset();
    editIndex = null;
  };
  document.querySelector(".close-modal")?.addEventListener("click", closeModal);
  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const record = {
      description: document.querySelector("#txDescription").value,
      amount: parseFloat(document.querySelector("#txAmount").value),
      type: document.querySelector("#txType").value,
      category: document.querySelector("#txCategory").value,
      date: document.querySelector("#txDate").value,
    };

    if (editIndex !== null) {
      transactions[editIndex] = record;
      showToast("Updated.");
    } else {
      transactions.push(record);
      showToast("Saved.");
    }

    saveAndRender();
    closeModal();
  });

  document.querySelector("#resetDataBtn")?.addEventListener("click", () => {
    if (confirm("Reset data?")) {
      transactions = [];
      localStorage.removeItem("transactions");
      renderDashboard();
    }
  });
}

function initFiltersAndTheme() {
  document
    .querySelector("#searchInput")
    ?.addEventListener("input", renderTable);
  document
    .querySelector("#typeFilter")
    ?.addEventListener("change", renderTable);

  const toggle = document.querySelector("#darkModeToggle");
  if (!toggle) return;

  const isDark = localStorage.getItem("darkMode") === "true";
  toggle.checked = isDark;
  if (isDark) document.documentElement.classList.add("dark");

  toggle.addEventListener("change", () => {
    document.documentElement.classList.toggle("dark", toggle.checked);
    localStorage.setItem("darkMode", toggle.checked);
    if (cashFlowChartInstance) renderDashboard();
  });
}

// Bootstrap
initAuth();
initModal();
initFiltersAndTheme();
