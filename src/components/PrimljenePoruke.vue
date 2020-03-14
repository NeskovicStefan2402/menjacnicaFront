<template>
<!-- <div style='overflow:scroll; padding:50px; height:400px;' class="form-control"> -->
        <div v-if="poruke.length!=0">
            <div v-for="(i,index) in poruke" >
                <kartica :poruka='i' :index='index'></kartica>
            </div>
        </div>
        <div class="alert alert-info" role="alert" v-else>
                    <p><center>Prijemno sanduce je prazno!</center></p>
        </div>
    <!-- </div>     -->
</template>
<script>
import PorukeKartica from './PorukaKartica';
export default {
    created(){
        this.$store.dispatch('getPoruke');
    },
    components:{
        'kartica':PorukeKartica
    },
    computed: {
        poruke() {
        return this.$store.state.forma.poruke;
        }
    },
}
</script>
<style scoped>

</style>