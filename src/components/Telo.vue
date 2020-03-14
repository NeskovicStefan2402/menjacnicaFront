<template>
    <div class="ravan">
        <pocetna data-aos="zoom-in" class="odeljak"></pocetna>
        <o-nama data-aos="zoom-in" class="odeljak"></o-nama>
        <kursna-lista data-aos="zoom-in" class="odeljak"></kursna-lista>
        <kalkulator data-aos="zoom-in" class="odeljak "></kalkulator>
        <kontakt data-aos="zoom-in" class="odeljak"></kontakt>
    </div>    
</template>
<script>
import ONama from './Onama';
import KursnaLista from './KursnaLista';
import Kalkulator from './Kalkulator';
import Kontakt from './Kontakt';
import Pocetna from './Pocetna';
export default {
    components:{
        pocetna:Pocetna,
        'o-nama':ONama,
        'kursna-lista':KursnaLista,
        'kalkulator':Kalkulator,
        'kontakt':Kontakt
  },
  created(){
      this.$store.dispatch("getKurs");
      this.$store.dispatch("getHistoryKlijent");
      this.$store.dispatch("getNews");
  }
}
</script>
<style scoped>
.odeljak{
    padding: 80px;
}
.ravan{
    margin-left: 100px;
    margin-top: 60px;
    background-color: #FFE79F;
    margin-right: 100px;
}

</style>