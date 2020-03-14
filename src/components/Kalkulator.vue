<template>
    <div id='kalkulator'>
        <div class="row">
            <div class="col-4">
                <h2>Simuliraj svoju transakciju</h2>
            </div>
        </div>
        <br>
        <br><br><br>
        <div class="row">
            <div class="col-5">
                <select id="val1" class="form-control" v-if="from" v-model="to">
                    <option v-for="i in valute" :value="i" >{{i.skracenica}}</option>
                </select>
                <input v-else type="text" class='form-control' value="RSD" disabled>
                <br><br><br>
                <input type="text" class="form-control" v-model="polje">
            </div>
            <div class="col-2">
                <img src='../assets/transfer.png' height="50px" width="50px" @click="from=!from">
                <br><br>
                <img src='../assets/convert.png' height="80px" width="100px">
            </div>
            <div class="col-5">
                <input v-if="from" type="text" class='form-control' value="RSD" disabled>
                <select id="val1" class="form-control" v-else v-model="to">
                    <option v-for="i in valute" :value="i" >{{i.skracenica}}</option>
                </select>
                <br><br><br>
                <input type="text" class="form-control" disabled v-model="suma">
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return {
            from:true,
            to:'RSD',
            polje:1
        }
    },
    computed: {
        valute() {
            return this.$store.state.forma.valute;
        },
        suma(){
                this.$store.state.forma.polje=this.polje;
                console.log(this.to);
                this.$store.dispatch('convert',[this.from,this.to]);
                return this.$store.state.forma.suma;
        }
    }
}
</script>
<style scoped>
#kalkulator{
    /* background-color: rgba(255, 255, 255, 0.671); */
    background-image: url('../assets/kalkulator.jpg');
    background-size: 100% 100%;
    height: 100vh;
    /* border-radius: 10px; */
    /* margin: 100px auto; */
    height: 100vh;
    text-align: center;
    padding-top: 150px;
}
.polje{
    text-align: center;
    border-style: solid;
    border-width: 0.5px;
}
select{
    text-align: center;
}
</style>