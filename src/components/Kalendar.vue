<template>
  <div style="background-color:white;">
    <table>
      <tr>
        <th class="day-name">Sun</th>
        <th class="day-name">Mon</th>
        <th class="day-name">Tue</th>
        <th class="day-name">Wed</th>
        <th class="day-name">Thu</th>
        <th class="day-name">Fri</th>
        <th class="day-name">Sat</th>
      </tr>

      <tr>
        <td class="day" id="0">
          <span class="number">{{dani[0]}}</span>
          
        </td>
        <td class="day" id="1">
          <span class="number">{{dani[1]}}</span>
          
        </td>
        <td class="day" id="2">
          <span class="number">{{dani[2]}}</span>
          
        </td>
        <td class="day" id="3">
          <span class="number">{{dani[3]}}</span>
          
        </td>
        <td class="day" id="4">
          <span class="number">{{dani[4]}}</span>
          
        </td>
        <td class="day" id="5">
          <span class="number">{{dani[5]}}</span>
          
        </td>
        <td class="day" id="6">
          <span class="number">{{dani[6]}}</span>
          
        </td>
      </tr>
      <tr>
        <td class="day" id="7">
          <span class="number">{{dani[7]}}</span>
          
        </td>
        <td class="day" id="8">
          <span class="number">{{dani[8]}}</span>
          
        </td>
        <td class="day" id="9">
          <span class="number">{{dani[9]}}</span>
          
        </td>
        <td class="day" id="10">
          <span class="number">{{dani[11]}}</span>
          
        </td>
        <td class="day" id="11">
          <span class="number">{{dani[12]}}</span>
          
        </td>
        <td class="day" id="12">
          <span class="number">{{dani[13]}}</span>
         
        </td>
        <td class="day" id="13">
          <span class="number">{{dani[14]}}</span>
          
        </td>
      </tr>
      <tr>
        <td class="day" id="14">
          <span class="number">{{dani[15]}}</span>
          
        </td>
        <td class="day" id="15">
          <span class="number">{{dani[16]}}</span>
          
        </td>
        <td class="day" id="16">
          <span class="number">{{dani[16]}}</span>
          
        </td>
        <td class="day" id="17">
          <span class="number">{{dani[17]}}</span>
          
        </td>
        <td class="day" id="18">
          <span class="number">{{dani[18]}}</span>
          
        </td>
        <td class="day" id="19">
          <span class="number">{{dani[19]}}</span>
          
        </td>
        <td class="day" id="20">
          <span class="number">{{dani[20]}}</span>
          
        </td>
      </tr>
      <tr>
        <td class="day" id="21">
          <span class="number">{{dani[21]}}</span>
          
        </td>
        <td class="day" id="22">
          <span class="number">{{dani[22]}}</span>
          
        </td>
        <td class="day" id="23">
          <span class="number" >{{dani[23]}}</span>
        </td>
        <td class="day" id="24">
          <span class="number">{{dani[24]}}</span>
          
        </td>
        <td class="day" id="25">
          <span class="number">{{dani[25]}}</span>
          
        </td>
        <td class="day" id="26">
          <span class="number">{{dani[26]}}</span>
          
        </td>
        <td class="day" id="27">
          <span class="number">{{dani[27]}}</span>
          
        </td>
      </tr>
      <tr>
        <td class="day" id="28">
          <span class="number">{{dani[28]}}</span>
        </td>
        <td class="day" id="29">
          <span class="number">{{dani[29]}}</span>
        </td>
        
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dani: [],
      popunjeni: []
    };
  },
  created() {
    setTimeout(() => {
      this.inicijalizujDatume();        
      }, 10);
    
  },
  methods: {
    popuni(){
      console.log('Popuni');
      this.popunjeni.forEach(element => {
      var vrednost = element.split(" ")[1];
      if(vrednost[0]==0){
        vrednost=vrednost[1];
      }
      document.getElementById(vrednost).style.backgroundColor='grey';
    });
    },
    inicijalizujDatume() {
      console.log('Izicijalizacija datuma');
      this.$store.dispatch("getHistory");  
      setTimeout(() => {
        this.$store.state.forma.istorijaPromene.forEach(element => {
        this.postoji(element);
      });
      for (let index = 30; index > 0; index--) {
        var someDate = new Date();
        someDate.setDate(someDate.getDate() - index);
        this.dani.push(someDate.toISOString().substr(8, 2));
      }
      this.popuni();  
      }, 500);
      
    },
    postoji(ele) {
      var brojac = 0;
      this.popunjeni.forEach(element => {
        if (ele.datum == element) {
          brojac++;
        }
      });
      if (brojac == 0) {
        console.log(ele.datum);
        this.popunjeni.push(ele.datum);
      }
    }
  }
};
</script>
<style scoped>
table {
  width: 100%;
  box-sizing: border-box;
  box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  font-family: "Ubuntu"; /*border-collapse: collapse;*/
  border-spacing: 0;
  background-color: #333333;
}

th,
td {
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
}

th {
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 700;
  padding: 10px 0;
  color: rgba(255, 255, 255, 0.5);
  background-color: #292929;
  letter-spacing: 1px;
}

td {
  width: 14.285%;
  transition: all 0.3s;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
  font-size: 14px;
  padding: 1.5% 1.5% 5%;
  vertical-align: initial;
  padding: 1.5% 0;
  height: 75px;
}

.day:hover {
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.today {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.25) !important;
}

span.number {
  margin-left: 10%;
}

span.event {
  height: 4px;
  background-color: rgba(0, 0, 0, 0.3);
  display: block;
  margin: 5px 10%;
  border-radius: 2px;
  background-color: #91c33b;
}

span.event-multiday {
  margin: 5px -2px;
  border-radius: 0;
}
span.event-multiday-start {
  margin-right: -4px;
}
span.event-multiday-finish {
  margin-left: -4px;
}

span.event-ghost {
  background-color: transparent;
}
</style>