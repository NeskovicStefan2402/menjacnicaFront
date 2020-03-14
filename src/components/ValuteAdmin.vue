<template>
    <div>
        <div class="row naslov">
            <div class="col-3 polje">Naziv</div>
            <div class="col-2 polje">Oznaka</div>
            <div class="col-2 polje">Kupovni</div>
            <div class="col-2 polje">Srednji</div>
            <div class="col-2 polje">Prodajni</div>
            <div class="col-1 "></div>
        </div>
        <div v-for="(i,index) in valute">
            <kartica :valuta='i' :index='index'></kartica>
        </div>
        <div class="row">
            <nova v-show="novaKartica==true"></nova>
        </div>
        <div class="row">
            <div class="col-5"></div>
            <div class="col-2">
                <img src="../assets/add.png" height="70px" width="70px" @click="dodaj" v-if="novaKartica==false" >
            </div>
            <div class="col-5"></div>
        </div>
        
    </div>
</template>
<script>
import ValutaKartica from './ValutaKartica';
import NovaKartica from './NovaKartica';
import {eventBus} from '../main';
export default {
    components:{
        'kartica':ValutaKartica,
        'nova':NovaKartica
    },
    data(){
        return{
            novaKartica:false
        }
    },
    computed: {
        valute() {
        this.lista=this.$store.state.forma.valute;
        return this.lista;
        }
    },
    methods:{
        dodaj(){
            this.novaKartica=true;
            eventBus.$emit('otvoriNovuPoruku');
        }
    },
    created(){
        setInterval(() => {
            eventBus.$on('dodaj',ele=>{
                this.novaKartica=false;
            })
        }, 500);
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
.naslov{
    border-radius: 10px;
    background-color: grey;
    color: white;
    height: 50px;
    padding: 15px;
    text-align: center;
}
.polje{
    border-right-color: white;
    border-right-style: solid;
    border-width: 0.5px;
}
</style>