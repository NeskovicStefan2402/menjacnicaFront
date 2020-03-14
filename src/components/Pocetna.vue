<template>
    <div id="pocetna">
        <div class="row">
            <div class="col-3 box"  >
                <h3>Dnevni kupovni kurs:</h3>
                <br>
                <div class="row">
                    <div class="col-4">
                        <img src="../assets/euro.png" height="50px" width="50px">
                    </div>
                    <div class="col-8">
                            <h3 class="animated infinite heartBeat slower">{{kursEvro}}</h3>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-4">
                        <img src="../assets/dolar.png" height="50px" width="50px">
                    </div>
                    <div class="col-8">
                        <h3 class="animated infinite heartBeat slower">{{kursDolar}}</h3>
                    </div>
                </div>
            </div>  
            <div class="col-5 box"  >
                <h3>Vesti</h3>
                <hr>
                <div class="scrollbar scrollbar-primary">
                    <div class="force-overflow">
                        <vest v-for="i in $store.state.forma.vesti" :vest='i'></vest>
                    </div>
                </div>
                <!-- <div  style="overflow-y:scroll; overflow-x:hidden; height:200px; padding-left:20px; width=100%;">
                    <vest v-for="i in $store.state.forma.vesti" :vest='i'></vest>
                </div> -->
            </div>
            <div class="col-3 box"  >
                <mapa></mapa>
            </div>
        </div>
        <div class="row ">
            <div class="box col-5">
                <grafikon></grafikon>
            </div>
            <div class="box col-3">
                <galerija></galerija>
            </div>
            <div class="box col-3">
                <sat></sat>
            </div>
        </div>
        
    </div>
</template>
<script>
import Mapa from './Mapa.vue';
import LineGraph from './LineGraph.vue';
import Sat from './Sat.vue';
import Vest from './Vest.vue';
import Galerija from './Galerija.vue';

export default {
    components:{
        mapa:Mapa,
        grafikon:LineGraph,
        sat:Sat,
        vest:Vest,
        galerija:Galerija
    },
    data(){
        return{
            kursEvro:'',
            kursDolar:''}
    },
    created(){
        setTimeout(() => {
        this.napuniPolja();
        console.log(this.kursEvro)
        }, 1000);
        
    },
    methods:{
        napuniPolja(){
             var lista=this.$store.state.forma.valute;
        lista.forEach(element => {
            if(element.skracenica=='EUR'){
                this.kursEvro=element.kupovni+' RSD';
            }
            if(element.skracenica=='USD'){
                this.kursDolar=element.kupovni+' RSD';
            }
        });
        }
    }
}
</script>
<style scoped>
#pocetna{
    background-image: url('../assets/pocetna.jpg');
    /* height: 100vh; */
    padding:50px;
    background-size: 100% 100%;
}
.box{
    border: 1px solid rgb(0, 0, 0);
    box-shadow: 1px 1px 2px black;
    background-color: rgba(0, 0, 0, 0.748);
    margin: 10px;
    padding:20px;
}
h3,h2{
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.scrollbar {
margin-left: 30px;
float: left;
height: 150px;
padding-left: 20px;
padding-right: 10px;
overflow-x: hidden;
/* background: #fff; */
overflow-y: scroll;
margin-bottom: 25px;
}
.force-overflow {
min-height: 450px;
}

.scrollbar-primary::-webkit-scrollbar {
width: 7px;
/* background-color: #F5F5F5; */
 }

.scrollbar-primary::-webkit-scrollbar-thumb {
border-radius: 10px;
-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
background-color: #b3a737; 
height: 70px;
}

.scrollbar-primary {
scrollbar-color: #4285F4 #F5F5F5;
}

.scrollbar-danger::-webkit-scrollbar-track {
-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
background-color: #F5F5F5;
border-radius: 10px; }

.scrollbar-danger::-webkit-scrollbar {
width: 12px;
background-color: #F5F5F5; }

.scrollbar-danger::-webkit-scrollbar-thumb {
border-radius: 10px;
-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
background-color: #ff3547; }

.scrollbar-danger {
scrollbar-color: #ff3547 #F5F5F5;
}

.scrollbar-warning::-webkit-scrollbar-track {
-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
background-color: #F5F5F5;
border-radius: 10px; }

.scrollbar-warning::-webkit-scrollbar {
width: 12px;
background-color: #F5F5F5; }

.scrollbar-warning::-webkit-scrollbar-thumb {
border-radius: 10px;
-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
background-color: #FF8800; }

.scrollbar-warning {
scrollbar-color: #FF8800 #F5F5F5;
}

.scrollbar-success::-webkit-scrollbar-track {
-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
background-color: #F5F5F5;
border-radius: 10px; }

.scrollbar-success::-webkit-scrollbar {
width: 12px;
background-color: #F5F5F5; }

.scrollbar-success::-webkit-scrollbar-thumb {
border-radius: 10px;
-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
background-color: #00C851; }

.scrollbar-success {
scrollbar-color: #00C851 #F5F5F5;
}

.scrollbar-info::-webkit-scrollbar-track {
-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
background-color: #F5F5F5;
border-radius: 10px; }

.scrollbar-info::-webkit-scrollbar {
width: 12px;
background-color: #F5F5F5; }

.scrollbar-info::-webkit-scrollbar-thumb {
border-radius: 10px;
-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
background-color: #33b5e5; }

.scrollbar-info {
scrollbar-color: #33b5e5 #F5F5F5;
}

.scrollbar-default::-webkit-scrollbar-track {
-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
background-color: #F5F5F5;
border-radius: 10px; }

.scrollbar-default::-webkit-scrollbar {
width: 12px;
background-color: #F5F5F5; }

.scrollbar-default::-webkit-scrollbar-thumb {
border-radius: 10px;
-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
background-color: #2BBBAD; }

.scrollbar-default {
scrollbar-color: #2BBBAD #F5F5F5;
}

.scrollbar-secondary::-webkit-scrollbar-track {
-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
background-color: #F5F5F5;
border-radius: 10px; }

.scrollbar-secondary::-webkit-scrollbar {
width: 12px;
background-color: #F5F5F5; }

.scrollbar-secondary::-webkit-scrollbar-thumb {
border-radius: 10px;
-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
background-color: #aa66cc; }

.scrollbar-secondary {
scrollbar-color: #aa66cc #F5F5F5;
}
</style>