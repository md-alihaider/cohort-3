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
  const motivationCard = document.querySelector(".motivation-card");

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
    if (motivationCard) {
      motivationCard.style.backgroundImage = `url('${imageUrl}')`;
    }

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
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,visibility&daily=sunrise,sunset&timezone=auto`,
      ),
      fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`,
      ),
    ]);

    const weatherData = await weatherResponse.json();
    const geoData = await geoResponse.json();

    const current = weatherData.current;

    const details = getWeatherDetails(current.weather_code);

    const city = geoData.city || geoData.locality || "Unknown City";
    const country = geoData.countryCode || "";

    /* ---------- Dashboard ---------- */

    tempElement.innerText = `${Math.round(current.temperature_2m)}°C`;
    conditionElement.innerText = details.text;
    locationElement.innerText = `${city}, ${country}`;

    iconContainer.innerHTML = `<i data-lucide="${details.icon}"></i>`;

    /* ---------- Weather Page ---------- */

    const weatherTemp = document.querySelector(".weather-temp");
    const weatherCondition = document.querySelector(".weather-condition");
    const weatherLocation = document.querySelector(".weather-location");
    const weatherIcon = document.querySelector(".weather-icon");

    const humidity = document.querySelector(".humidity");
    const windSpeed = document.querySelector(".wind-speed");
    const visibility = document.querySelector(".visibility");
    const feelsLike = document.querySelector(".feels-like");
    const sunrise = document.querySelector(".sunrise");
    const sunset = document.querySelector(".sunset");
    const weatherTip = document.querySelector(".weather-tip");

    if (weatherTemp) {
      weatherTemp.textContent = `${Math.round(current.temperature_2m)}°C`;
    }

    if (weatherCondition) {
      weatherCondition.textContent = details.text;
    }

    if (weatherLocation) {
      weatherLocation.textContent = `${city}, ${country}`;
    }

    if (weatherIcon) {
      weatherIcon.src = `https://openweathermap.org/img/wn/10d@2x.png`;
    }

    if (humidity) {
      humidity.textContent = `${current.relative_humidity_2m}%`;
    }

    if (windSpeed) {
      windSpeed.textContent = `${Math.round(current.wind_speed_10m)} km/h`;
    }

    if (visibility) {
      visibility.textContent = `${Math.round(current.visibility / 1000)} km`;
    }

    if (feelsLike) {
      feelsLike.textContent = `${Math.round(current.apparent_temperature)}°C`;
    }

    if (sunrise) {
      sunrise.textContent = new Date(
        weatherData.daily.sunrise[0],
      ).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    if (sunset) {
      sunset.textContent = new Date(
        weatherData.daily.sunset[0],
      ).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    if (weatherTip) {
      if (current.temperature_2m >= 35) {
        weatherTip.textContent = "Stay hydrated and avoid direct sunlight.";
      } else if (details.text.toLowerCase().includes("rain")) {
        weatherTip.textContent = "Carry an umbrella today.";
      } else if (details.text.toLowerCase().includes("cloud")) {
        weatherTip.textContent = "Pleasant weather for outdoor activities.";
      } else {
        weatherTip.textContent = "Enjoy the beautiful weather today.";
      }
    }

    lucide.createIcons();
  } catch (error) {
    conditionElement.innerText = "Weather unavailable";
    locationElement.innerText = "Try again later";
    console.error(error);
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

function dailyPlannerManager() {
  const plannerInputs = document.querySelectorAll(".planner-input");
  const rows = document.querySelectorAll(".time-row");

  const todayBtn = document.querySelector(".btn-outline");
  const clearBtn = document.querySelector(".btn-primary");

  const STORAGE_KEY = "focusFlowPlanner";

  let planner = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

  // Load saved data
  plannerInputs.forEach((input) => {
    const time = input.dataset.time;

    if (planner[time]) {
      input.value = planner[time].text;

      if (planner[time].completed) {
        input.closest(".time-row").classList.add("completed");
      }
    }

    input.addEventListener("input", () => {
      planner[time] = {
        text: input.value,
        completed: planner[time]?.completed || false,
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(planner));
    });
  });

  rows.forEach((row) => {
    const input = row.querySelector(".planner-input");
    const time = input.dataset.time;

    const checkBtn = row.querySelector(".check-btn");
    const deleteBtn = row.querySelector(".delete-btn");

    checkBtn.addEventListener("click", () => {
      row.classList.toggle("completed");

      planner[time] = {
        text: input.value,
        completed: row.classList.contains("completed"),
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(planner));
    });

    deleteBtn.addEventListener("click", () => {
      input.value = "";

      row.classList.remove("completed");

      delete planner[time];

      localStorage.setItem(STORAGE_KEY, JSON.stringify(planner));
    });
  });

  clearBtn.addEventListener("click", () => {
    if (!confirm("Clear today's planner?")) return;

    planner = {};

    localStorage.removeItem(STORAGE_KEY);

    plannerInputs.forEach((input) => {
      input.value = "";
      input.closest(".time-row").classList.remove("completed");
    });
  });

  todayBtn.addEventListener("click", () => {
    plannerInputs[0].focus();
  });
}

function backToDashboard() {
  const backBtn = document.getElementById("back-to-dashboard");

  if (!backBtn) return;

  backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelectorAll(".page-section").forEach((page) => {
      page.classList.remove("active-page");
    });
    document.getElementById("page-dashboard").classList.add("active-page");
    document.querySelectorAll(".sidebar-link .links").forEach((link) => {
      link.classList.remove("active");
    });

    document.getElementById("dashboard").classList.add("active");
    localStorage.setItem("activeTab", "dashboard");
  });
}

function motivationManager() {
  const quoteText = document.querySelector(".motivation-quote");
  const quoteAuthor = document.querySelector(".motivation-author");
  const newQuoteBtn = document.querySelector(".new-quote-btn");
  const backBtn = document.querySelector(".motivation-back-btn");
  const copyBtn = document.querySelector(".copy-btn");
  const shareBtn = document.querySelector(".share-btn");
  const likeBtn = document.querySelector(".like-btn");

  backBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Hide all pages
    document.querySelectorAll(".page-section").forEach((page) => {
      page.classList.remove("active-page");
    });

    // Show dashboard
    document.getElementById("page-dashboard").classList.add("active-page");

    // Update sidebar
    document.querySelectorAll(".sidebar-link .links").forEach((link) => {
      link.classList.remove("active");
    });

    document.getElementById("dashboard").classList.add("active");

    localStorage.setItem("activeTab", "dashboard");
  });

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(
      `${quoteText.textContent}\n${quoteAuthor.textContent}`,
    );

    copyBtn.innerHTML = `
    <i data-lucide="check"></i>
    Copied
  `;

    lucide.createIcons();

    setTimeout(() => {
      copyBtn.innerHTML = `
      <i data-lucide="copy"></i>
      Copy
    `;

      lucide.createIcons();
    }, 2000);
  });

  shareBtn.addEventListener("click", async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Daily Motivation",
        text: `${quoteText.textContent}\n${quoteAuthor.textContent}`,
      });
    } else {
      alert("Sharing is not supported on this browser.");
    }
  });

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("liked");

    if (likeBtn.classList.contains("liked")) {
      likeBtn.innerHTML = `
      <i data-lucide="heart"></i>
      Liked
    `;
    } else {
      likeBtn.innerHTML = `
      <i data-lucide="heart"></i>
      Like
    `;
    }

    lucide.createIcons();
  });

  async function loadMotivationQuote() {
    try {
      quoteText.textContent = "Loading...";
      quoteAuthor.textContent = "";

      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();

      quoteText.textContent = `"${data.quote}"`;
      quoteAuthor.textContent = `— ${data.author}`;
    } catch (error) {
      quoteText.textContent = "Failed to load quote.";
      quoteAuthor.textContent = "";
    }
  }
  newQuoteBtn.addEventListener("click", loadMotivationQuote);
  loadMotivationQuote();
}

function pomodoroManager() {
  const timer = document.getElementById("timer");
  const progressFill = document.querySelector(".progress-fill");
  const progressText = document.querySelector(".progress-text");

  const startBtn = document.querySelector(".start-btn");
  const resetBtn = document.querySelector(".reset-btn");
  const skipBtn = document.querySelector(".skip-btn");

  const timerTabs = document.querySelectorAll(".timer-tab");
  const pomodoroBackBtn = document.querySelector(".pomodoro-back-btn");

  if (pomodoroBackBtn) {
    pomodoroBackBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showPage("dashboard");
    });
  }

  const modes = {
    pomodoro: {
      label: "Focus Time",
      duration: 25 * 60,
    },
    short: {
      label: "Short Break",
      duration: 5 * 60,
    },
    long: {
      label: "Long Break",
      duration: 15 * 60,
    },
  };

  let currentMode = "pomodoro";
  let totalSeconds = modes[currentMode].duration;
  let secondsLeft = totalSeconds;

  let timerInterval = null;
  let isRunning = false;

  function updateDisplay() {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;

    timer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    const progress = ((totalSeconds - secondsLeft) / totalSeconds) * 100;

    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${Math.floor(progress)}%`;

    saveTimer();
  }

  function startTimer() {
    if (isRunning) return;

    isRunning = true;

    startBtn.innerHTML = '<i data-lucide="pause"></i> Pause';

    lucide.createIcons();

    timerInterval = setInterval(() => {
      secondsLeft--;

      updateDisplay();

      if (secondsLeft <= 0) {
        clearInterval(timerInterval);

        isRunning = false;
        startBtn.innerHTML = '<i data-lucide="play"></i> Start';
        lucide.createIcons();
        alert("Session Completed!");
        localStorage.removeItem("focusFlowPomodoro");
      }
    }, 1000);
  }

  function pauseTimer() {
    clearInterval(timerInterval);

    isRunning = false;
    startBtn.innerHTML = '<i data-lucide="play"></i> Start';
    lucide.createIcons();
  }

  function resetTimer() {
    pauseTimer();
    secondsLeft = totalSeconds;
    updateDisplay();
  }

  function skipTimer() {
    pauseTimer();

    if (currentMode === "pomodoro") {
      setMode("short");
    } else {
      setMode("pomodoro");
    }
  }

  function setMode(mode) {
    currentMode = mode;
    totalSeconds = modes[mode].duration;
    secondsLeft = totalSeconds;
    document.querySelector(".timer-display p").textContent = modes[mode].label;

    timerTabs.forEach((tab) => tab.classList.remove("active"));
    if (mode === "pomodoro") timerTabs[0].classList.add("active");
    if (mode === "short") timerTabs[1].classList.add("active");
    if (mode === "long") timerTabs[2].classList.add("active");

    updateDisplay();
  }

  function saveTimer() {
    localStorage.setItem(
      "focusFlowPomodoro",
      JSON.stringify({
        mode: currentMode,
        secondsLeft,
      }),
    );
  }

  function loadTimer() {
    const saved = JSON.parse(localStorage.getItem("focusFlowPomodoro"));

    if (!saved) {
      updateDisplay();
      return;
    }

    currentMode = saved.mode;
    totalSeconds = modes[currentMode].duration;
    secondsLeft = saved.secondsLeft;
    setMode(currentMode);
    secondsLeft = saved.secondsLeft;
    updateDisplay();
  }

  startBtn.addEventListener("click", () => {
    if (isRunning) {
      pauseTimer();
    } else {
      startTimer();
    }
  });

  resetBtn.addEventListener("click", resetTimer);
  skipBtn.addEventListener("click", skipTimer);

  timerTabs[0].addEventListener("click", () => setMode("pomodoro"));
  timerTabs[1].addEventListener("click", () => setMode("short"));
  timerTabs[2].addEventListener("click", () => setMode("long"));

  loadTimer();
}

function dailyGoalsManager() {
  const addBtn = document.querySelector(".add-goal-btn");
  const goalList = document.querySelector(".goal-list");
  const filters = document.querySelectorAll(".goal-filter");
  const goalsBackBtn = document.querySelector(".goals-back-btn");

  if (goalsBackBtn) {
    goalsBackBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showPage("dashboard");
    });
  }

  let goals = JSON.parse(localStorage.getItem("focusFlowGoals")) || [];

  let currentFilter = "all";

  function renderGoals() {
    goalList.innerHTML = "";

    goals.forEach((goal, index) => {
      if (currentFilter === "active" && goal.completed) return;
      if (currentFilter === "completed" && !goal.completed) return;

      const card = document.createElement("div");
      card.className = "goal-card";

      card.innerHTML = `
        <div class="goal-top">
          <div>
            <h3>${goal.title}</h3>
            <p>${goal.description}</p>
          </div>

          <span class="goal-status ${goal.completed ? "completed" : "active"}">
            ${goal.completed ? "Completed" : "Active"}
          </span>
        </div>

        <div class="goal-progress">
          <div class="progress-bar">
            <div
              class="progress-fill"
              style="width:${goal.progress}%">
            </div>
          </div>
        </div>

        <div class="goal-bottom">

          <span>${goal.progress}%</span>

          <div class="goal-actions">

            <button
              class="goal-action-btn edit-goal"
              data-index="${index}">
              <i data-lucide="pencil"></i>
            </button>

            <button
                class="goal-action-btn complete-goal ${goal.completed ? "completed" : ""}"
                data-index="${index}">
               <i data-lucide="${goal.completed ? "check-check" : "check"}"></i>
            </button>

            <button
              class="goal-action-btn delete-goal"
              data-index="${index}">
              <i data-lucide="trash-2"></i>
            </button>

          </div>

        </div>
      `;

      goalList.appendChild(card);
    });

    lucide.createIcons();
  }

  addBtn.addEventListener("click", () => {
    const title = prompt("Goal Title");

    if (!title) return;

    const description = prompt("Goal Description");

    if (!description) return;

    const progress = Number(prompt("Progress (0-100)", "0"));

    goals.unshift({
      title,
      description,
      progress,
      completed: false,
    });

    localStorage.setItem("focusFlowGoals", JSON.stringify(goals));

    renderGoals();
  });

  goalList.addEventListener("click", (e) => {
    if (e.target.closest(".delete-goal")) {
      const index = e.target.closest(".delete-goal").dataset.index;

      goals.splice(index, 1);

      localStorage.setItem("focusFlowGoals", JSON.stringify(goals));

      renderGoals();
    } else if (e.target.closest(".edit-goal")) {
      const index = e.target.closest(".edit-goal").dataset.index;

      const newProgress = Number(prompt("Progress", goals[index].progress));

      if (!isNaN(newProgress)) {
        goals[index].progress = newProgress;

        if (newProgress >= 100) {
          goals[index].completed = true;
        }

        localStorage.setItem("focusFlowGoals", JSON.stringify(goals));

        renderGoals();
      }
    } else if (e.target.closest(".complete-goal")) {
      const index = e.target.closest(".complete-goal").dataset.index;

      goals[index].completed = !goals[index].completed;

      goals[index].progress = goals[index].completed ? 100 : 0;

      localStorage.setItem("focusFlowGoals", JSON.stringify(goals));

      renderGoals();
    }
  });

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      filters.forEach((btn) => btn.classList.remove("active"));

      filter.classList.add("active");

      currentFilter = filter.textContent.toLowerCase();

      renderGoals();
    });
  });

  renderGoals();
}

function showPage(pageId) {
  document.querySelectorAll(".page-section").forEach((page) => {
    page.classList.remove("active-page");
  });

  document.getElementById(`page-${pageId}`).classList.add("active-page");

  document.querySelectorAll(".links").forEach((link) => {
    link.classList.remove("active");
  });

  const activeLink = document.getElementById(pageId);

  if (activeLink) {
    activeLink.classList.add("active");
  }

  localStorage.setItem("activeTab", pageId);
}

function weatherManager() {
  const refreshBtn = document.querySelector(".refresh-weather-btn");

  const weatherIcon = document.querySelector(".weather-icon");
  const weatherTemp = document.querySelector(".weather-temp");
  const weatherCondition = document.querySelector(".weather-condition");
  const weatherLocation = document.querySelector(".weather-location");

  const humidity = document.querySelector(".humidity");
  const windSpeed = document.querySelector(".wind-speed");
  const visibility = document.querySelector(".visibility");
  const feelsLike = document.querySelector(".feels-like");
  const sunrise = document.querySelector(".sunrise");
  const sunset = document.querySelector(".sunset");
  const weatherTip = document.querySelector(".weather-tip");
  const weatherBackBtn = document.querySelector(".weather-back-btn");

  if (weatherBackBtn) {
    weatherBackBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showPage("dashboard");
    });
  }

  refreshBtn.addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getWeather(position.coords.latitude, position.coords.longitude);
        },
        () => {
          getWeather(40.71, -74.0);
        }
      );
    } else { getWeather(40.71, -74.0); }
  })
}

weatherManager();
dailyGoalsManager();
pomodoroManager();
motivationManager();
backToDashboard();
dailyPlannerManager();
todoListManager();
dashboardBtns();
loadContent();
initWeather();
setInterval(initWeather, 1000 * 60 * 30);
getDailyQuote();
setInterval(getDailyQuote, 1000 * 60 * 60);
getCurrentTime();
