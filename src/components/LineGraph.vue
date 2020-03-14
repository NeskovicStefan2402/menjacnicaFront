<template>
  <div>
    <canvas id="planet-chart"></canvas>
    <select class="form-control izbor"  v-model="skracenica" @change="createChart('planet-chart',planetChartData)">
      <option disabled value="" style="color:white;" selected>Izaberite valutu:</option>
      <option v-for="i,index in $store.state.forma.istorijaKlijent.map(a=>a.skracenica)"  :value="index" >{{i}}</option>
    </select>
  </div>
</template>
<script>
import Chart from "chart.js";
export default {
  data() {
    return {
      skracenica:0,
      planetChartData: {
        type: "line",
        skracenica:0,
        data: {
          labels: [],
          datasets: [
            {
              label: "Kupovni kurs",
              // data: this.$store.state.forma.istorijaKlijent[this.skracenica].istorija.map(a => a.kupovni),
              data:[],
              backgroundColor: [],
              borderColor: [],
              borderWidth: 1
            },
            {
              label: "Srednji kurs",
              // data: this.$store.state.forma.istorijaKlijent[this.skracenica].istorija.map(a => a.srednji),
              data:[],
              backgroundColor: [],
              borderColor: [],
              borderWidth: 1
            },
            {
              label: "Prodajni",
              // data: this.$store.state.forma.istorijaKlijent[this.skracenica].istorija.map(a => a.prodajni),
              data:[],
              backgroundColor: [],
              borderColor: [],
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25
                }
              }
            ]
          }
        }
      }
    };
  },
  created(){
      
      setTimeout(() => {
  //       this.planetChartData.skracenica=0;
            this.createChart('planet-chart',this.planetChartData);      
      }, 1000);
    }, 
  methods: {
    createChart(chartId, chartData) {
      console.log(chartData);
      this.dodeliBoju();
      const ctx = document.getElementById(chartId);
      chartData.data.labels=this.$store.state.forma.istorijaKlijent[this.skracenica].istorija.map(a=>a.datum);
      chartData.data.datasets[0].data=this.$store.state.forma.istorijaKlijent[this.skracenica].istorija.map(a => a.kupovni)
      chartData.data.datasets[1].data=this.$store.state.forma.istorijaKlijent[this.skracenica].istorija.map(a => a.srednji)
      chartData.data.datasets[2].data=this.$store.state.forma.istorijaKlijent[this.skracenica].istorija.map(a => a.prodajni)
      var myChart = new Chart(ctx, {
        type: 'line',
        skracenica: 0,
        data: chartData.data,
        options: chartData.options
      });
    },
    vratiNaziv(){
      console.log('render');
      if(this.skracenica===undefined){
        return 'EUR'
      }else{
        return this.skracenica;
      }
    },
    dodeliBoju() {
      this.planetChartData.data.datasets[0].backgroundColor = [];
      this.planetChartData.data.datasets[0].borderColor = [];
      this.planetChartData.data.datasets[1].backgroundColor = [];
      this.planetChartData.data.datasets[1].borderColor = [];
      this.planetChartData.data.datasets[2].backgroundColor = [];
      this.planetChartData.data.datasets[2].borderColor = [];

      this.$store.state.forma.istorijaKlijent[0]['istorija'].forEach(element => {
        this.planetChartData.data.datasets[0].backgroundColor.push(
          "rgba(5, 5, 83, 0.678)"
        );
        this.planetChartData.data.datasets[1].backgroundColor.push(
          "rgba(71, 183,132,.5)"
        );
        this.planetChartData.data.datasets[2].backgroundColor.push(
          "rgba(99, 39, 39, 0.616)"
        );

        this.planetChartData.data.datasets[0].borderColor.push("rgb(5, 5, 83)");
        this.planetChartData.data.datasets[1].borderColor.push("rgb(5, 5, 83)");
        this.planetChartData.data.datasets[2].borderColor.push("rgb(5, 5, 83)");
      });
    }
  }
};
</script>
<style scoped>
.izbor{
  background-color: #b3a737;
  color: white;
  border: transparent;
}
</style>