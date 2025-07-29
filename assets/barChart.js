const ctx = document.getElementById('barChart');

const data = [300, 500, 400, 700, 550, 200];
const labels = ['May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct'];
const maxIndex = data.indexOf(Math.max(...data));
const barColors = data.map((_, i) => i === maxIndex ? '#39e04a' : '#444'); // green and dark gray

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: '', // No legend label
      data: data,
      backgroundColor: barColors,
      borderWidth: 0
    }]
  },
  options: {
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Mortgage payment',
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
        border: { display: false }, // Remove left axis line
        ticks: { color: '#fff', font: { size: 14 } }
      }
    }
  }
}); 