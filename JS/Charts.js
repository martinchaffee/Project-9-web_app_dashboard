// Colors
mainColor = "rgba(109, 109, 182, 1)";

//Line Graph Fill
var backgroundColor = "rgba(109, 109, 182, 0.4)";
var phonesColor = "rgba(111, 167, 184, 1)";
var desktopColor = mainColor;
var tabletsColor = "rgba(124, 218, 150, 1)";



// Global chart stylings



// Canvasses from DOM
var trafficHourlyLine = document.getElementById('traffic-hourly');
var trafficDailyLine = document.getElementById('traffic-daily');
var trafficWeeklyLine = document.getElementById('traffic-weekly');
var trafficMonthlyLine = document.getElementById('traffic-monthly');
  // Single Charts
var trafficDailyBar = document.getElementById('traffic-daily-bar');
var mobileUsersDonut = document.getElementById('mobile-users');


// Line Charts
  // Hourly Line Charts
var trafficHourlyChart = new Chart(trafficHourlyLine, {
  type: 'line',
  options: {
    legend: {
      display: false
    },
  },
  data: {
    labels: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
    datasets: [
      {
        data: [7, 10, 14, 15, 18, 25, 23, 14, 11, 10, 6, 4],
        label: '',
        fill: true,
        lineTension: 0,
        borderColor: mainColor,
        backgroundColor: backgroundColor,
        pointBorderColor: mainColor,
        pointBackgroundColor: "#fff",
        borderWidth: 1,
        pointRadius: 4,
      }
    ]
  }
});

// Daily Line Chart
var trafficDailyChart = new Chart(trafficDailyLine, {
  type: 'line',
  options: {
    legend: {
      display: false
    },
  },
  data: {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        data: [75, 100, 175, 125, 225, 200, 100],
        label: '',
        fill: true,
        lineTension: 0,
        borderColor: mainColor,
        backgroundColor: backgroundColor,
        pointBorderColor: mainColor,
        pointBackgroundColor: "#fff",
        borderWidth: 1,
        pointRadius: 4,
      }
    ]
  }
});

var trafficWeeklyChart = new Chart(trafficWeeklyLine, {
  type: 'line',
  options: {
    legend: {
      display: false
    },
  },
  data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [
      {
        data: [750, 1250, 1000, 1400, 2000, 1500, 1300, 1700, 1250, 1800, 1100],
        label: '',
        fill: true,
        lineTension: 0,
        borderColor: mainColor,
        backgroundColor: backgroundColor,
        pointBorderColor: mainColor,
        pointBackgroundColor: "#fff",
        borderWidth: 1,
        pointRadius: 4,
      }
    ]
  }
});


var trafficMonthlyChart = new Chart(trafficMonthlyLine, {
  type: 'line',
  options: {
    legend: {
      display: false
    },
  },
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        data: [4400, 5250, 5000, 4900, 4800, 4600, 5400, 5800, 5700, 5300, 5000, 5400],
        label: '',
        fill: true,
        lineTension: 0,
        borderColor: mainColor,
        backgroundColor: backgroundColor,
        pointBorderColor: mainColor,
        pointBackgroundColor: "#fff",
        borderWidth: 1,
        pointRadius: 4,
      }
    ]
  }
});

var dailyTrafficBar = new Chart(trafficDailyBar, {
  type: 'bar',
  options: {
    legend: {
      display: false
    },
  },
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
      {
        data: [75, 100, 175, 125, 225, 200, 100],
        label: '',
        fill: true,
        borderColor: mainColor,
        backgroundColor: mainColor,
        borderWidth: 1,
      }
    ]
  }
});

var mobileUsers = new Chart(mobileUsersDonut, {
  type: 'doughnut',
  options: {
    legend: {
      // position: 'right',
    },
  },
  data: {
    labels: ['Phones', 'Tablets', 'Desktops'],
    datasets: [
      {
        data: [15, 15, 70],
        backgroundColor: [phonesColor, tabletsColor, desktopColor],
        borderWidth: 0,
      }
    ]
  }
});
