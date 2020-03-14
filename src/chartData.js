import {store} from './store/store'; 
export const planetChartData = {
    type: 'bar',
    data: {
      labels: store.state.forma.valute.map(a => a.skracenica)
      ,datasets: [
        { 
          label: 'Kupovni kurs',
          data: store.state.forma.valute.map(a => a.kupovni),
          backgroundColor: [
            'rgba(5, 5, 83, 0.678)',
            'rgba(5, 5, 83, 0.678)',
            'rgba(5, 5, 83, 0.678)',
            'rgba(5, 5, 83, 0.678)',
            'rgba(5, 5, 83, 0.678)',
            'rgba(5, 5, 83, 0.678)',
            'rgba(5, 5, 83, 0.678)',
            'rgba(5, 5, 83, 0.678)'
          ],
          borderColor: [
            'rgb(5, 5, 83)',
            'rgb(5, 5, 83)',
            'rgb(5, 5, 83)',
            'rgb(5, 5, 83)',
            'rgb(5, 5, 83)',
            'rgb(5, 5, 83)',
            'rgb(5, 5, 83)',
            'rgb(5, 5, 83)'

          ],
          borderWidth: 1
        },
        { 
          label: 'Srednji kurs',
          data: store.state.forma.valute.map(a => a.srednji),
          backgroundColor: [
            'rgba(71, 183,132,.5)',
            'rgba(71, 183,132,.5)',
            'rgba(71, 183,132,.5)',
            'rgba(71, 183,132,.5)',
            'rgba(71, 183,132,.5)',
            'rgba(71, 183,132,.5)',
            'rgba(71, 183,132,.5)',
            'rgba(71, 183,132,.5)'
          ],
          borderColor: [
            '#47b784',
            '#47b784',
            '#47b784',
            '#47b784',
            '#47b784',
            '#47b784',
            '#47b784',
            '#47b784'
          ],
          borderWidth: 1
        },
        { 
          label: 'Prodajni',
          data: store.state.forma.valute.map(a => a.prodajni),
          backgroundColor: [
            'rgba(99, 39, 39, 0.616)', 
            'rgba(99, 39, 39, 0.616)',
            'rgba(99, 39, 39, 0.616)',
            'rgba(99, 39, 39, 0.616)',
            'rgba(99, 39, 39, 0.616)',
            'rgba(99, 39, 39, 0.616)',
            'rgba(99, 39, 39, 0.616)',
            'rgba(99, 39, 39, 0.616)'

          ],
          borderColor: [
            'rgb(99, 39, 39)',
            'rgb(99, 39, 39)',
            'rgb(99, 39, 39)',
            'rgb(99, 39, 39)',
            'rgb(99, 39, 39)',
            'rgb(99, 39, 39)',
            'rgb(99, 39, 39)',
            'rgb(99, 39, 39)'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            padding: 25,
          }
        }]
      }
    }
  };

  
  
  export default planetChartData;