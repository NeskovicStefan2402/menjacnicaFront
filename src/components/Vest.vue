<template>
    <div class="odeljak">
    <div class="row">
        <a target="_blank" :href="'https://naslovi.net/'+vest.ruta" style="color:#b3a737;">{{vest.naslov}}</a>
    </div>
    <div class="row">
        <div class="col-6">
            {{vest.objavio}}
        </div>
        <div class="col-6">
            {{vest.vreme}}
        </div>
    </div>
    <hr style="color:#b3a737;">
    </div>    
</template>
<script>
export default{
    props:[
        'vest'
    ]
}
</script>
<style scoped>
.odeljak{
    color: white;
}

</style>