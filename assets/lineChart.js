const ctxLine = document.getElementById('lineChart');

const lineData = [300, 500, 400, 700, 550, 200];
const lineLabels = ['May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct'];

new Chart(ctxLine, {
  type: 'line',
  data: {
    labels: lineLabels,
    datasets: [{
      label: '', // No legend label
      data: lineData,
      borderColor: '#39e04a',
      backgroundColor: 'rgba(57, 224, 74, 0.2)',
      borderWidth: 3,
      pointBackgroundColor: '#fff',
      pointBorderColor: '#39e04a',
      pointRadius: 5,
      tension: 0.4 // smooth curve
    }]
  },
  options: {
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Investment Growth',
        color: '#fff',
        align: 'start',
        font: { size: 18, weight: 'medium' }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#fff', font: { size: 14 } }
      },
      y: {
        beginAtZero: true,
        grid: { display: true, color: '#fff' },
        border: { display: false },
        ticks: { color: '#fff', font: { size: 14 } }
      }
    }
  }
}); 