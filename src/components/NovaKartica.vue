<template>
<div class="kartica" >
    <div class="row ">
        <div class="col-4">
            Naziv:
            <input type="text" id='naziv' class="form-control" v-model="valuta.naziv">
        </div>
        <div class="col-2">
            Skracenica:
            <input type="text" id='skracenica' class="form-control" v-model="valuta.skracenica">
        </div>
        <div class="col-2">
            Kupovni:
            <input type="text"  id='kupovni' class="form-control" v-model="valuta.kupovni">
        </div>
        <div class="col-2">
            Srednji:
            <input type="text" id='srednji' class="form-control" v-model="valuta.srednji">
        </div>
        <div class="col-2">
            Prodajni:
            <input type="text" id='prodajni' class="form-control" v-model="valuta.prodajni">
        </div>
    </div>
    <br>
    <div class="row ">
        <button class="form-control" @click="dodaj"> Dodaj valutu</button>
    </div>
    </div>
</template>
<script>
import {eventBus} from '../main';
export default {
  data(){
      return{
          valuta:{
              naziv:'',
              skracenica:'',
              kupovni:'',
              srednji:'',
              prodajni:''
          }
      }
  },
  methods:{
      dodaj(){
          var brojac=0;
          if(this.valuta.naziv==''){
              document.getElementById('naziv').style.borderColor='red';
              brojac++;
          }else{
            document.getElementById('naziv').style.borderColor='transparent';    
          }

          if(this.valuta.skracenica==''){
              document.getElementById('skracenica').style.borderColor='red';
              brojac++;
          }else{
            document.getElementById('skracenica').style.borderColor='transparent';    
          }
         
         if(this.valuta.kupovni=='' || isNaN(Number(this.valuta.kupovni))){
              document.getElementById('kupovni').style.borderColor='red';
              brojac++;
          }else{
            document.getElementById('kupovni').style.borderColor='transparent';    
          }

          if(this.valuta.prodajni=='' ||  isNaN(Number(this.valuta.prodajni))){
              document.getElementById('prodajni').style.borderColor='red';
              brojac++;
          }else{
            document.getElementById('prodajni').style.borderColor='transparent';    
            console.log(typeof this.valuta.prodajni)
          }

          if(this.valuta.srednji=='' || isNaN(Number(this.valuta.srednji))){
              document.getElementById('srednji').style.borderColor='red';
              brojac++;
          }else{
            document.getElementById('srednji').style.borderColor='transparent';    
          }
          console.log(brojac);
            if(brojac==0){
                this.valuta.skracenica=this.valuta.skracenica.toUpperCase();
                this.$store.state.forma.valute.push(this.valuta);
                eventBus.$emit('dodaj');
                this.$store.dispatch('addValuta',this.valuta);
                this.valuta={naziv:'',skracenica:'',kupovni:'',srednji:'',prodajni:''}
            }else{
                // alert('Popunite korektno polja!');
            }
          
      }
  }
}
</script>
<style scoped>
.kartica{
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
    background-color: rgba(165, 165, 165, 0.719);
}
</style>