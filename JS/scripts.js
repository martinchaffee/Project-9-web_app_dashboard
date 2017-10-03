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

//Notification icon elements
const iconBell = document.getElementById("icon-bell");
const notifyDot = document.getElementById("notify-dot");
  //Drop-down menu with notifications
const notifyMenu = document.getElementById('drop-down');


// Alert div and button
const closeButton = document.getElementById('close');
const alertDiv = document.getElementById("wrapper-alert");

//Message Sent/ Message Failed variables
const sendBtn = document.getElementById("send-btn");
const messageForm = document.querySelector("#message-user");
const messageSearchbox = messageForm.querySelector("input");
const messageText = messageForm.querySelector("textarea");




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

//Hide alertDiv
const hideAlert = () => {
  alertDiv.style.display="none";
}

//Hide alertDiv
const hideDot = () => {
  notifyDot.style.display="none";
}

//Show notifyMenu
const showNotifyMenu = () => {
  notifyMenu.style.display="initial";
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

// hide notifyDot when close button is clicked
iconBell.addEventListener('click', hideDot);

// Message sent or message failed alerts
messageForm.addEventListener('submit', (e) => {
  if (!!messageSearchbox.value === false || !!messageText.value === ""){
    alert('Your message failed to send. \n \n Be sure both forms are completed and try again.');
  } else {
      alert('Your message has been sent');
  }
});

// show alert divs when bell icon is clicked

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("icon-bell");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
