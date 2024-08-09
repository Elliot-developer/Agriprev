const ctz = document.getElementById('bar-chart');

new Chart(ctz, {
    type: 'bar',
   
    data: {
        labels: ["Classe A1", "Classe A2", "Classe B", "Classe C", "Classe D"],
        datasets: [{
            label: "Classes de potencialidade agrícola natural das terras",
            data: [2, 30, 33, 21, 11],
            fill: false,
            backgroundColor: [
                '#2891c9',
                '#2891c9',
                '#2891c9',
                '#2891c9',
                '#2891c9'
            ],
            borderColor: [
                '#2891c9',
                '#2891c9',
                '#2891c9',
                '#2891c9',
                '#2891c9'
            ],
            borderWidth: 1,
            borderRadius: 5,
            barPercentage: .4,
            categoryPercentage: 1

    }]

    
  },
    plugins: {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                font: {
                    size: 30
                }
            }
        }
    },
    tension: 0.5

  });