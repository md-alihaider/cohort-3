const themeToggleButton = document.getElementById("theme-toggle");
themeToggleButton.addEventListener("click", toggleTheme);

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("light-theme");
  themeToggleButton.innerHTML = body.classList.contains("light-theme")
    ? '<i data-lucide="moon"></i> Dark Mode'
    : '<i data-lucide="sun"></i> Light Mode';
  lucide.createIcons();
}


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

getCurrentTime();