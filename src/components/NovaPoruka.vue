<template>
  <div class="kart">
    <div class="row">
      <div class="col-1">
        <p>Za:</p>
      </div>
      <div class="col-11">
        <input id='za' type="text" class="form-control" v-model="za" />
      </div>
      <br />
    </div>
    <br />
    <div class="row">
      <div class="col-1">
        <p>Naslov:</p>
      </div>
      <div class="col-11">
        <input type="text" class="form-control" v-model="naslov" />
      </div>
      <br />
    </div>
    <hr />
    <div class="row">
      <textarea class="form-control" cols="10" rows="6" v-model="poruka"></textarea>
    </div>
    <br />
    <div class="row">
      <button class="form-control dugme" @click="posalji" id="dugme">Prosledi poruku</button>
    </div>
  </div>
</template>
<script>
export default{
    data(){
        return{
            za:'',
            naslov:'',
            poruka:'Unesite poruku'
        }
    },
    methods:{
        async proveri(){
            this.$store.dispatch('proveriEmail',this.za)
        },
        posalji(){
            // console.log('console.log: '+this.za);
            // this.proveri();
            // console.log('console.log: '+this.$store.state.forma.validan);
            // userToken.then(function(result) {
            // console.log(result)
            // })
             
            // if(this.$store.state.forma.validan==true){
                document.getElementById('za').style.borderColor='transparent';
                this.$store.dispatch('postOdgovor',[this.poruka,this.za,this.naslov,null])
                this.za='';
                this.naslov='';
                this.poruka='Unesite poruku';
            // }else{
            //     document.getElementById('za').style.borderColor='red';
            // }
        }
    }
}
</script>
<style scoped>
.kart {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
  background-color: rgba(165, 165, 165, 0.308);
}
.dugme {
  background-color: rgba(0, 128, 0, 0.692);
  color: white;
}
</style>