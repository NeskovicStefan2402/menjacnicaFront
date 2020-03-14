<template>
    <div class="static">
        <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Valuta</th>
          <th scope="col">Naziv</th>
          <th scope="col">Kupovni</th>
          <th scope="col">Srednji</th>
          <th scope="col">Prodajni</th>
        </tr>
      </thead>
      
      <tbody v-for="i in lista">
        <tr>
          <th scope="row">{{i.naziv}}</th>
          <td>{{i.skracenica}}</td>
          <td @click="promeni(i,'kupovni')">{{i.kupovni}}</td>
          <td @click="promeni(i,'srednji')">{{i.srednji}}</td>
          <td @click="promeni(i,'prodajni')">{{i.prodajni}}</td>
        </tr>
      </tbody>
    </table>
    <br>
    <button class="form-control sacuvaj" @click="sacuvajIzmene">Sacuvaj promene</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            lista:[],
            prikazi:false}
    },
    //  computed: {
    //     valute() {
    //     this.lista=this.$store.state.forma.valute;
    //     return this.lista;
    //     }
    // },
    methods:{
        sacuvajIzmene(){
          
          this.$store.dispatch('postKurs',this.lista);
        },
        promeni(i,tip){
            var vrednost = prompt("Unesite podatak koji zelite da promenite", "");
            if(!isNaN(Number(vrednost)) && vrednost!=''){
            for (let index = 0; index < this.lista.length; index++) {
                if(this.lista[index]==i){
                  if (tip=='kupovni'){
                    this.lista[index].kupovni=vrednost;
                  }else if( tip=='srednji'){
                    this.lista[index].srednji=vrednost;
                  }else{
                    this.lista[index].prodajni=vrednost;
                  }
                }
            }
            }else{
              alert('Nije uneta korektna vrednost!')
            }
        }
    }
    ,
    created(){
      // this.$store.dispatch("getKurs");
      this.lista=this.lista=this.$store.state.forma.valute;
    }
}
</script>
<style scoped>
div.static{
    position: static;
}
.sacuvaj{
  background-color: grey;
  color: white;
}
</style>