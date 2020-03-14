<template>
    <div id='kontakt'>
        <h1>Kontakt</h1>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6" style="text-align:center;">
                <h2><b>Menjacnica db</b></h2>
                <h3>Ulica Nova bb</h3>
                <h4>061/6202894</h4>
            </div>
            <div class="col-3"></div>
        </div>
        <br>
        <div class="row">
            <div class="col-1">
                <p>Kontakt:</p>
            </div>
            <div class="col-11">
                <input id='za' type="text" class="form-control" v-model="email">
            </div>
        </div>
        <br>
        <div class="row">
            <textarea class="form-control" cols="10" rows="7" v-model="poruka" ></textarea>
        </div>
        <br>        
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <button class="form-control" @click="prosledi">Prosledi</button>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            poruka:'Unesite poruku...',
            email:''
        }
    },
    methods:{
        prosledi(){
            // if(this.$store.dispatch('proveriEmail',this.email)==true){
                // document.getElementById('za').style.borderColor='red';
                // alert('Unesite korektnu poruku');
            // }else{
                document.getElementById('za').style.borderColor='transparent';
                this.$store.dispatch('postPoruka',[this.poruka,this.email]); 
                this.email=''
                this.poruka=''
                // }
        }
    }
}
</script>
<style scoped>
#kontakt{
    background-color: rgba(132, 123, 255, 0.653);
    /* border-radius: 10px; */
    /* margin: 100px auto; */
    height: 100vh;
}
</style>