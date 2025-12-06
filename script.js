function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Add leading zeros
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  // Update time
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
  document.getElementById("ampm").textContent = ampm;

  // Date
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  document.getElementById("date").textContent = now.toLocaleDateString("en-US", options);

  // Greeting
  let greeting;
  if (now.getHours() < 12) greeting = "🌅 Good Morning, Anu!";
  else if (now.getHours() < 18) greeting = "🌞 Good Afternoon, Anu!";
  else greeting = "🌙 Good Evening, Anu!";
  document.getElementById("greeting").textContent = greeting;
}

// Dynamic background based on time
function setBackground() {
  const hour = new Date().getHours();
  let bg;

  if (hour >= 6 && hour < 12) {
    bg = "linear-gradient(135deg, #ff9a9e, #fad0c4)"; // Morning
  } else if (hour >= 12 && hour < 18) {
    bg = "linear-gradient(135deg, #1e3c72, #2a5298)"; // Afternoon
  } else {
    bg = "linear-gradient(135deg, #141e30, #243b55)"; // Night
  }

  document.body.style.background = bg;
}

// Run clock and background updates
setInterval(updateClock, 1000);
setInterval(setBackground, 60000);

updateClock();
setBackground();
