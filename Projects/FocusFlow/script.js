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
    const quoteBgContainer = document.querySelector(".quotes-container"); // 1. Target the background container

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

      // --- DYNAMIC BACKGROUND LOGIC ---
      // 2. Check the 24-hour time (rawHours) to determine the time of day
      let timeOfDay = "night";

      if (rawHours >= 5 && rawHours < 12) {
        timeOfDay = "morning"; // 5:00 AM to 11:59 AM
      } else if (rawHours >= 12 && rawHours < 17) {
        timeOfDay = "noon"; // 12:00 PM to 4:59 PM
      } else if (rawHours >= 17 && rawHours < 21) {
        timeOfDay = "evening"; // 5:00 PM to 8:59 PM
      } else {
        timeOfDay = "night"; // 9:00 PM to 4:59 AM
      }

      // 3. Apply the correct image URL
      // Make sure your image names match these exactly (morning.png, noon.png, etc.)
      quoteBgContainer.style.backgroundImage = `url('./assets/backgrounds/${timeOfDay}.png')`;

      // Safety check to ensure the image always fits nicely
      quoteBgContainer.style.backgroundSize = "cover";
      quoteBgContainer.style.backgroundPosition = "center";
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
  // 1. Target ALL sidebar links
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
      event.preventDefault(); // Stop page from jumping

      // Change sidebar backgrounds
      allLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");

      // Save the choice so it remembers when we refresh
      localStorage.setItem("activeTab", link.id);

      // Run the function to show the correct HTML
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
dashboardBtns();
loadContent();
initWeather();
getDailyQuote();
setInterval(getDailyQuote, 1000 * 60 * 60);
getCurrentTime();
