<template>
    <div class="row kartica">
        <div class="col-3">
            {{valuta.naziv}}
        </div>
        <div class="col-2">
            {{valuta.skracenica}}
        </div>
        <div class="col-2">
            {{valuta.kupovni}}
        </div>
        <div class="col-2">
            {{valuta.srednji}}
        </div>
        <div class="col-2">
            {{valuta.prodajni}}
        </div>
        <div class="col-1">
            <img src="../assets/delete.png" width="20px" height="20px" @click="obrisi(valuta)">
        </div>
    </div>
</template>
<script>
export default {
  props:['valuta','index'],
  methods:{
      obrisi(valuta){
            var odgovor=confirm('Da li ste sigurni?')
            console.log(odgovor)
          if(odgovor==true){
            this.$store.dispatch('deleteValuta',valuta); 
            this.$store.state.forma.valute.splice(this.index,1);
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
    border-radius: 10px;
    text-align: center;
    background-color: rgba(165, 165, 165, 0.719);
}
</style>