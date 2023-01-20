

let kanvas = document.getElementById("chart");

let grafik = new Chart(kanvas, {
    type: 'bar',
    data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ],
        datasets: [{
          type: 'bar',
          label: 'Gained',
          data: [10, 50, 70, 45,45,10,60],
          backgroundColor: 'yellow'
        }, {
          type: 'bar',
          label: 'Lost',
          data: [-10, -30, -20, -35,-40,-2,-50],
          fill: false,
          backgroundColor: 'red'
        }]
      }
});