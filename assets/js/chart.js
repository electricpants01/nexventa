//! Chart JS
const chartData = {
  labels: ['Investment', 'Food', 'Shopping', 'Others'],
  data: [40, 15, 25, 20]
}
const chart = document.getElementById('doughnut')
const eventList = document.querySelector('.chart ul')
new Chart(chart, {
  type: 'doughnut',
  data: {
    labels: ['Investment', 'Food', 'Shopping', 'Others'],
    datasets: [
      {
        label: '# of Events',
        data: [8, 3, 5, 4],
        backgroundColor: ['#582bac', '#b31a4d', '#e48e2c', '#4a920f'],
        offset: 10,
        hoverOffset: 8,
        hoverBorderColor: '#9a999b',
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#8b8a96',
          font: {
            size: 12,
            weight: 600
          }
        }
      }
    },
    layout: {
      padding: {
        bottom: 10
      }
    }
  }
})
