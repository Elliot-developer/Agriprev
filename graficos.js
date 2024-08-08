const ctx = document.getElementById('line-chart');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
                datasets: [{
                    label: "PIB AGRICULTURA 2019",
                    data: [41, 45, 48, 51, 63, 82, 106, 111, 101, 105, 120, 142, 149, 160, 190, 201, 240, 250, 259, 307, 303, 304, 322],
                    fill: false,
                    borderColor: '#006398',
                    borderWidth: '5',
                    pointBorderColor: '#2891c9',
                    pointBackgroundColor: '#2891c9',
                    pointBorderWidth: '5'
                }]
            },
            options: {
              plugins: {
                  legend: {
                      labels: {
                          // This more specific font property overrides the global property
                          font: {
                              size: 25
                          }
                      }
                  }
              }
          },
            tension: 0.5
            
        });