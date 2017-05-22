var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: 'Daily Traffic',
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: [
                'rgba(86,85,149,1.0)',
                'rgba(86,85,149,1.0)',
                'rgba(86,85,149,1.0)',
                'rgba(86,85,149,1.0)',
                'rgba(86,85,149,1.0)',
                'rgba(86,85,149,1.0)',
                'rgba(86,85,149,1.0)'
            ],
            borderColor: [
                'rgba(86,85,149,1.0)',
                'rgba(86,85,149,1.0)',
                'rgba(86,85,149,1.0)',
                'rgba(86,85,149,1.0)',
                'rgba(86,85,149,1.0)',
                'rgba(86,85,149,1.0)',
                'rgba(86,85,149,1.0)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
