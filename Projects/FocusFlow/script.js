const themeToggleButton = document.getElementById("theme-toggle");
themeToggleButton.addEventListener("click", toggleTheme);

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("light-theme");
  themeToggleButton.innerHTML = body.classList.contains("light-theme")
    ? '<i data-lucide="moon"></i> Dark Mode'
    : '<i data-lucide="sun"></i> Light Mode';
  localStorage.setItem(
    "theme",
    body.classList.contains("light-theme") ? "light" : "dark",
  );
  lucide.createIcons();
}

// Check for saved theme preference on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  if (savedTheme === "light") {
    body.classList.add("light-theme");
  }
});

function getCurrentTime() {
  const time = document.querySelector(".time");
  const date = document.querySelector(".date");
  const quoteBgContainer = document.querySelector(".quotes-container");

  function updateTime() {
    const now = new Date();

    // --- TIME TEXT LOGIC ---
    let rawHours = now.getHours();
    let displayHours = rawHours % 12;
    if (displayHours === 0) displayHours = 12;
    const hours = displayHours.toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = rawHours >= 12 ? "PM" : "AM";
    time.innerHTML = `<span>${hours}</span>:<span>${minutes}</span> ${ampm}`;

    const dateOptions = { weekday: "long", day: "numeric", month: "long" };
    date.innerHTML = now.toLocaleDateString("en-US", dateOptions);

    let imageUrl = "";

    if (rawHours >= 5 && rawHours < 12) {
      // Morning (Sunrise)
      imageUrl = "./assets/backgrounds/morning.png";
    } else if (rawHours >= 12 && rawHours < 17) {
      // Noon (Bright Sky)
      imageUrl = "./assets/backgrounds/noon.png";
    } else if (rawHours >= 17 && rawHours < 21) {
      // Evening (Sunset)
      imageUrl = "./assets/backgrounds/evening.png";
    } else {
      // Night (Stars)
      imageUrl = "./assets/backgrounds/night.png";
    }
    quoteBgContainer.style.backgroundImage = `url('${imageUrl}')`;

    // Safety checks to ensure it fills the box and doesn't repeat
    quoteBgContainer.style.backgroundSize = "cover";
    quoteBgContainer.style.backgroundPosition = "center";
    quoteBgContainer.style.backgroundRepeat = "no-repeat";
  }

  updateTime();
  setInterval(updateTime, 1000);
}

const quoteContainer = document.querySelector(".quote");

async function getDailyQuote() {
  try {
    quoteContainer.innerHTML = "Loading quote...";
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();
    quoteContainer.innerHTML = `"${data.quote}"  <span>-${data.author}</span>`;
  } catch (error) {
    // quoteContainer.innerHTML = `"The secret of getting ahead is getting started." <span>- Mark Twain</span>`;
    quoteContainer.innerHTML = "Loading quote failed. Please try again later.";
  }
}

const tempElement = document.querySelector(".temperature");
const conditionElement = document.querySelector(".condition");
const locationElement = document.querySelector(".location");
const iconContainer = document.querySelector(".weather-logo");

function getWeatherDetails(code) {
  if (code === 0) return { text: "Clear Sky", icon: "sun" };
  if (code === 1 || code === 2)
    return { text: "Partly Cloudy", icon: "cloud-sun" };
  if (code === 3) return { text: "Overcast", icon: "cloud" };
  if (code >= 45 && code <= 48) return { text: "Fog", icon: "cloud-fog" };
  if (code >= 51 && code <= 67) return { text: "Rain", icon: "cloud-rain" };
  if (code >= 71 && code <= 77) return { text: "Snow", icon: "snowflake" };
  if (code >= 95) return { text: "Thunderstorm", icon: "cloud-lightning" };
  return { text: "Unknown", icon: "cloud" }; // Fallback
}

async function getWeather(lat, lon) {
  try {
    tempElement.innerText = "...";
    conditionElement.innerText = "Loading weather";
    locationElement.innerText = "Locating...";

    const [weatherResponse, geoResponse] = await Promise.all([
      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
      ),
      fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`,
      ),
    ]);

    const weatherData = await weatherResponse.json();
    const geoData = await geoResponse.json();

    const temp = Math.round(weatherData.current_weather.temperature);
    const details = getWeatherDetails(weatherData.current_weather.weathercode);

    const city = geoData.city || geoData.locality || "Unknown City";
    const country = geoData.countryCode || "";

    tempElement.innerText = `${temp}°C`;
    conditionElement.innerText = details.text;
    locationElement.innerText = `${city}, ${country}`;

    iconContainer.innerHTML = `<i data-lucide="${details.icon}"></i>`;
    lucide.createIcons();
  } catch (error) {
    conditionElement.innerText = "Weather unavailable";
    locationElement.innerText = "Try again later";
  }
}

function initWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getWeather(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        getWeather(40.71, -74.0);
      },
    );
  } else {
    getWeather(40.71, -74.0);
  }
}

function loadContent() {
  const allLinks = document.querySelectorAll(".sidebar-link .links");
  function loadPage(pageId) {
    const allPages = document.querySelectorAll(".page-section");
    allPages.forEach((page) => page.classList.remove("active-page"));
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
      targetPage.classList.add("active-page");
    }
  }

  allLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); 
      allLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
      localStorage.setItem("activeTab", link.id);
      loadPage(link.id);
    });
  });

  const savedTab = localStorage.getItem("activeTab") || "dashboard";
  const savedLink = document.getElementById(savedTab);

  if (!savedLink) {
    allLinks.forEach((item) => item.classList.remove("active"));
    savedLink.classList.add("active");
    localStorage.setItem("activeTab", "dashboard");
  }

  if (savedLink) {
    allLinks.forEach((item) => item.classList.remove("active"));
    savedLink.classList.add("active");
  }

  loadPage(savedTab);
}

// Target all the dashboard shortcut buttons
function dashboardBtns() {
  const dashboardButtons = document.querySelectorAll(".open-tool-btn");

  dashboardButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const allPages = document.querySelectorAll(".page-section");
      allPages.forEach((page) => page.classList.remove("active-page"));
      const targetPage = document.getElementById(`page-${targetId}`);
      if (targetPage) {
        targetPage.classList.add("active-page");
      }
      const allLinks = document.querySelectorAll(".sidebar-link .links");
      allLinks.forEach((item) => item.classList.remove("active"));

      const matchingSidebarLink = document.getElementById(targetId);
      if (matchingSidebarLink) {
        matchingSidebarLink.classList.add("active");
      }
      localStorage.setItem("activeTab", targetId);
    });
  });
}

function todoListManager() {
  const taskInput = document.querySelector(".task-input");
  const addTaskBtn = document.querySelector(".add-task-btn");
  const taskList = document.querySelector(".task-list");
  const filterTabs = document.querySelectorAll(".filter-tab");

  let todos = JSON.parse(localStorage.getItem("focusFlowTasks")) || [];
  let currentFilter = "all";
  function renderTasks() {
    taskList.innerHTML = "";

    let allCount = 0;
    let activeCount = 0;
    let completedCount = 0;

    todos.forEach((task, index) => {
      allCount++;
      if (task.completed) {
        completedCount++;
      } else {
        activeCount++;
      }

      if (currentFilter === "active" && task.completed) return;
      if (currentFilter === "completed" && !task.completed) return;

      const newTaskItem = document.createElement("div");
      newTaskItem.classList.add("task-item");

      if (task.completed) {
        newTaskItem.classList.add("completed");
      }

      newTaskItem.innerHTML = `
      <div class="task-left">
        <button class="check-circle ${task.completed ? "checked" : ""}" data-index="${index}">
          ${task.completed ? '<i data-lucide="check"></i>' : ""}
        </button>
        <div class="task-info">
          <h4>${task.title}</h4>
          <p>Added at ${task.time}</p> 
        </div>
      </div>
      <div class="task-actions">
        ${task.completed ? '<span class="status-badge success">Completed</span>' : ""}
        <button class="action-btn edit-btn" data-index="${index}"><i data-lucide="pencil"></i></button>
        <button class="action-btn delete-btn" data-index="${index}"><i data-lucide="trash-2"></i></button>
      </div>
    `;
      taskList.appendChild(newTaskItem);
    });

    const tabs = document.querySelectorAll(".filter-tab");
    if (tabs.length === 3) {
      tabs[0].innerText = `All (${allCount})`;
      tabs[1].innerText = `Active (${activeCount})`;
      tabs[2].innerText = `Completed (${completedCount})`;
    }
    lucide.createIcons();
  }

  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      const newTask = {
        title: taskText,
        time: timeString,
        completed: false,
      };

      todos.unshift(newTask);
      localStorage.setItem("focusFlowTasks", JSON.stringify(todos));

      renderTasks();

      taskInput.value = "";
    }
  });

  taskList.addEventListener("click", (event) => {
    // --- DELETE TASK ---
    if (event.target.closest(".delete-btn")) {
      const button = event.target.closest(".delete-btn");
      const index = button.getAttribute("data-index");

      todos.splice(index, 1);
      localStorage.setItem("focusFlowTasks", JSON.stringify(todos));
      renderTasks(); // Redraw
    }

    // --- CHECK / UNCHECK TASK ---
    else if (event.target.closest(".check-circle")) {
      const button = event.target.closest(".check-circle");
      const index = button.getAttribute("data-index");

      // Flip the true/false switch
      todos[index].completed = !todos[index].completed;
      localStorage.setItem("focusFlowTasks", JSON.stringify(todos));
      renderTasks();
    }

    // --- EDIT TASK ---
    else if (event.target.closest(".edit-btn")) {
      const button = event.target.closest(".edit-btn");
      const index = button.getAttribute("data-index");

      const newTitle = prompt("Edit your task:", todos[index].title);
      if (newTitle !== null && newTitle.trim() !== "") {
        todos[index].title = newTitle.trim();
        localStorage.setItem("focusFlowTasks", JSON.stringify(todos));
        renderTasks();
      }
    }
  });
  filterTabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      filterTabs.forEach((t) => t.classList.remove("active"));

      const clickedTab = event.target;
      clickedTab.classList.add("active");

      const tabText = clickedTab.innerText.toLowerCase();

      if (tabText.includes("active")) {
        currentFilter = "active";
      } else if (tabText.includes("completed")) {
        currentFilter = "completed";
      } else {
        currentFilter = "all";
      }
      renderTasks();
    });
  });
  renderTasks();
}

todoListManager();
dashboardBtns();
loadContent();
initWeather();
setInterval(initWeather, 1000 * 60 * 30);
getDailyQuote();
setInterval(getDailyQuote, 1000 * 60 * 60);
getCurrentTime();
