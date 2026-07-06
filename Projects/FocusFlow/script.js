const themeToggleButton = document.getElementById("theme-toggle");
themeToggleButton.addEventListener("click", toggleTheme);

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("light-theme");
  themeToggleButton.innerHTML = body.classList.contains("light-theme")
    ? '<i data-lucide="moon"></i> Dark Mode'
    : '<i data-lucide="sun"></i> Light Mode';
  localStorage.setItem("theme", body.classList.contains("light-theme") ? "light" : "dark");
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
  function updateTime() {
    const now = new Date();
    let rawHours = now.getHours();
    rawHours = rawHours % 12;
    if (rawHours === 0) rawHours = 12; // Convert 0 hours to 12 for 12-hour format
    const hours = rawHours.toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = rawHours >= 12 ? "PM" : "AM";
    time.innerHTML = `<span>${hours}</span>:<span>${minutes}</span> ${ampm}`;
    const dateOptions = { weekday: "long", day: "numeric", month: "long" };
    date.innerHTML = now.toLocaleDateString("en-US", dateOptions);
  }
  updateTime();
  setInterval(updateTime, 60000);
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
        // Uses your actual location
        getWeather(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        // Fallback to New York if user blocks location
        getWeather(40.71, -74.0);
      },
    );
  } else {
    getWeather(40.71, -74.0);
  }
}

function loadContent() {
  // 1. Target the content area and ALL sidebar links
  const contentArea = document.querySelector(".content");
  const allLinks = document.querySelectorAll(".sidebar-link .links");

  // 2. Your dictionary of pages
  const pageContent = {
    dashboard: `
    <h2>Dashboard Overview</h2>
    <p style="color: var(--text-secondary);">Welcome to your FocusFlow summary.</p>
  `,
    "todo-list": `
    <h2>Todo List</h2>
    <p style="color: var(--text-secondary);">Manage your tasks here.</p>
  `,
    "daily-planner": `
    <h2>Daily Planner</h2>
    <p style="color: var(--text-secondary);">Schedule your day.</p>
  `,
    motivation: `
    <h2>Motivation</h2>
    <p style="color: var(--text-secondary);">Your vision board and quotes.</p>
  `,
    "pomodoro-timer": `
    <h2>Pomodoro Timer</h2>
    <p style="color: var(--text-secondary);">Focus for 25 minutes.</p>
  `,
    "daily-goals": `
    <h2>Daily Goals</h2>
    <p style="color: var(--text-secondary);">Track your main targets.</p>
  `,
    weather: `
    <h2>Weather</h2>
    <p style="color: var(--text-secondary);">Check the current weather.</p>
  `,
    theme: `
    <h2>Theme Settings</h2>
    <p style="color: var(--text-secondary);">Customize your app's appearance.</p>
  `,
  };

  // 3. Function to load the HTML
  function loadPage(pageId) {
    contentArea.innerHTML = pageContent[pageId] || `<h2>Page Not Found</h2>`;
  }

  // 4. Attach click listeners to all links
  allLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      allLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
      localStorage.setItem("activeTab", link.id);

      // Load the content
      loadPage(link.id);
    });
  });

  const savedTab = localStorage.getItem("activeTab") || "dashboard";
  const savedLink = document.getElementById(savedTab);
  if (savedLink) {
    allLinks.forEach((item) => item.classList.remove("active"));
    savedLink.classList.add("active");
  }

  loadPage(savedTab);
}

loadContent();
initWeather();
getDailyQuote();
getCurrentTime();
