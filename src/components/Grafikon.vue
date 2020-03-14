<template>
<div>
  <canvas id="planet-chart"></canvas>
  <div class="row">
    <div class="col-2">
      <input type="button" value="bar" class="form-control" @click="promeniTip('bar')">
    </div>
    
    <div class="col-2">
      <input type="button" value="line" class="form-control" @click="promeniTip('line')">
    </div>
    
    <div class="col-2">
      <input type="button" value="radar" class="form-control" @click="promeniTip('radar')">
    </div>
    <div class="col-2">
      <input type="button" value="doughnut" class="form-control" @click="promeniTip('doughnut')">
    </div>
    <div class="col-2">
      <input type="button" value="pie" class="form-control" @click="promeniTip('pie')">
    </div>
    
    
  </div>
</div>
</template>
<script>
import Chart from 'chart.js';
export default {
  data() {
  return {
    myChart:'', 
    planetChartData: {
    type: 'bar',
    data: {
      labels: this.$store.state.forma.valute.map(a => a.skracenica)
      ,datasets: [
        { 
          label: 'Kupovni kurs',
          data: this.$store.state.forma.valute.map(a => a.kupovni),
          backgroundColor: [
            
          ],
          borderColor: [
            

          ],
          borderWidth: 1
        },
        { 
          label: 'Srednji kurs',
          data: this.$store.state.forma.valute.map(a => a.srednji),
          backgroundColor: [
            
          ],
          borderColor: [
           
          ],
          borderWidth: 1
        },
        { 
          label: 'Prodajni',
          data: this.$store.state.forma.valute.map(a => a.prodajni),
          backgroundColor: [
            

          ],
          borderColor: [
            
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
    },
  }
},
mounted() {
    // this.$store.dispatch('getKurs');
    // console.log(this.$store.state.forma.valute.map(a => a.prodajni));
    
      // this.createChart('planet-chart', this.planetChartData);
      
    
},
created(){
  setTimeout(() => {
    this.createChart('planet-chart', this.planetChartData);
  }, 10);
},
methods: {
  promeniTip(type){
    this.planetChartData.type=type
    console.log(this.myChart);
    this.createChart('planet-chart', this.planetChartData);
  },
  createChart(chartId, chartData) {
    this.dodeliBoju();
    const ctx = document.getElementById(chartId);
    // this.myChart=null;
    this.myChart = new Chart(ctx, {
      type: chartData.type,
      data: chartData.data,
      options: chartData.options,
    });
  },
  dodeliBoju(){
    this.planetChartData.data.datasets[0].backgroundColor=[]
    this.planetChartData.data.datasets[0].borderColor=[]
    this.planetChartData.data.datasets[1].backgroundColor=[]
    this.planetChartData.data.datasets[1].borderColor=[]
    this.planetChartData.data.datasets[2].backgroundColor=[]
    this.planetChartData.data.datasets[2].borderColor=[]
    
    this.$store.state.forma.valute.forEach(element => {
        this.planetChartData.data.datasets[0].backgroundColor.push('rgba(5, 5, 83, 0.678)');
        this.planetChartData.data.datasets[1].backgroundColor.push('rgba(71, 183,132,.5)');
        this.planetChartData.data.datasets[2].backgroundColor.push('rgba(99, 39, 39, 0.616)');

        this.planetChartData.data.datasets[0].borderColor.push('rgb(5, 5, 83)');
        this.planetChartData.data.datasets[1].borderColor.push('rgb(5, 5, 83)');
        this.planetChartData.data.datasets[2].borderColor.push('rgb(5, 5, 83)');
    });
  }
}
};
</script>
<style scoped>

</style>