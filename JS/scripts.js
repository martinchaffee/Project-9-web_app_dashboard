// Line Graph buttons
const hourlyButton = document.getElementById("hourly");
const dailyButton = document.getElementById("daily");
const weeklyButton = document.getElementById("weekly");
const monthlyButton = document.getElementById("monthly");
//Line Graph Charts
const hourlyCanvas = document.getElementById("traffic-hourly");
const dailyCanvas = document.getElementById("traffic-daily");
const weeklyCanvas = document.getElementById("traffic-weekly");
const monthlyCanvas = document.getElementById("traffic-monthly");

// Alert div and button
const closeButton = document.getElementById('close');
const alertDiv = document.getElementById("wrapper-alert");

// functions for showing canvasses and changing button color and background
const showHourlyCanvas = () => {
    dailyCanvas.style.display="none";
    weeklyCanvas.style.display="none";
    monthlyCanvas.style.display="none";
    hourlyCanvas.style.display="initial";
    hourlyButton.style.background="rgba(124, 218, 150, 1)";
    hourlyButton.style.color="#ffffff";
    dailyButton.style.color="initial";
    dailyButton.style.background="initial";
    weeklyButton.style.color="initial";
    weeklyButton.style.background="initial";
    monthlyButton.style.color="initial";
    monthlyButton.style.background="initial";
}

const showDailyCanvas = () => {
  dailyCanvas.style.display="initial";
  weeklyCanvas.style.display="none";
  monthlyCanvas.style.display="none";
  hourlyCanvas.style.display="none";
  dailyButton.style.background="rgba(124, 218, 150, 1)";
  dailyButton.style.color="#ffffff";
  hourlyButton.style.color="initial";
  hourlyButton.style.background="initial";
  weeklyButton.style.color="initial";
  weeklyButton.style.background="initial";
  monthlyButton.style.color="initial";
  monthlyButton.style.background="initial";
}

const showWeeklyCanvas = () => {
  dailyCanvas.style.display="none";
  weeklyCanvas.style.display="initial";
  monthlyCanvas.style.display="none";
  hourlyCanvas.style.display="none";
  weeklyButton.style.background="rgba(124, 218, 150, 1)";
  weeklyButton.style.color="#ffffff";
  hourlyButton.style.color="initial";
  hourlyButton.style.background="initial";
  dailyButton.style.color="initial";
  dailyButton.style.background="initial";
  monthlyButton.style.color="initial";
  monthlyButton.style.background="initial";
}

const showMonthlyCanvas = () => {
  dailyCanvas.style.display="none";
  weeklyCanvas.style.display="none";
  monthlyCanvas.style.display="initial";
  hourlyCanvas.style.display="none";
  monthlyButton.style.background="rgba(124, 218, 150, 1)";
  monthlyButton.style.color="#ffffff";
  hourlyButton.style.color="initial";
  hourlyButton.style.background="initial";
  weeklyButton.style.color="initial";
  weeklyButton.style.background="initial";
  dailyButton.style.color="initial";
  dailyButton.style.background="initial";
}

const hideAlert = () => {
  alertDiv.style.display="none";
}

// Show hourly chart at page load
window.onload = showHourlyCanvas;

// When clicked, buttons show associated chart, change own background and color
hourlyButton.addEventListener('click', showHourlyCanvas);
dailyButton.addEventListener('click', showDailyCanvas);
weeklyButton.addEventListener('click', showWeeklyCanvas);
monthlyButton.addEventListener('click',showMonthlyCanvas);

// hide alert div when close button is clicked
closeButton.addEventListener('click', hideAlert);