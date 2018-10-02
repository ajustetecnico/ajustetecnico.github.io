<canvas id="myChart-bar" width="600" height="380"></canvas>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.js"></script>

<script>
var ctx = document.getElementById("myChart-bar");
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Azul", "Vermelho", "Amarelo", "Verde", "Púrpura", "Laranja"],
    datasets: [{
      label: '# de ocorrências',
      data: [3, 15, 1, 2, 2, 20],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        },
        scaleLabel: {
          display: true,
          labelString: 'Ocorrências'
        }      
      }],
      xAxes:
      [{
        scaleLabel:{
          display: true,
          labelString: 'Cor'
        }
      }]
    }
  }
});
</script>
