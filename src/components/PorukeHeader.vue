<template>
    <div>
    <div class="row kart">
        <div class="col-4">
            <router-link tag="button" to='/admin/poruke' class="form-control dugme">Primljene</router-link>
            
        </div>
        <div class="col-4">
            <router-link tag="button" to='/admin/poruke/poslate' class="form-control dugme">Poslate</router-link>
            
        </div>
        <div class="col-4">
            <router-link tag="button" to='/admin/poruke/novaPoruka' class="form-control dugme">Kreiraj novu</router-link>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.dugme{
    padding: 5px;
    height: 50px;
    color: #FFF;
    margin: 30px auto;
    text-align: center;
    background-color: rgb(10, 5, 80);
}
</style>