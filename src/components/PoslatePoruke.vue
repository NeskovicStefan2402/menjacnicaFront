<template>
<div>
    <div v-for="i in poslate">
        <poslate-poruke :odgovor='i'></poslate-poruke>
    </div>
</div>
</template>
<script>
import OdgovorPoruke from './OdgovorPoruka.vue';
export default {
    components:{
        'poslate-poruke':OdgovorPoruke
    },
    computed:{
        poslate(){
            return this.$store.state.forma.poslate;
        }
    },
    mounted(){
        this.$store.dispatch('getPoslate');   
    }
}
</script>
<style scoped>

</style>