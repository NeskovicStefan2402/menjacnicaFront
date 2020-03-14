<template>
<div>
    <header-templ></header-templ>
    <router-view class="nesto"></router-view>
    </div>
</template>
<script>
import PorukeHeader from './PorukeHeader';
export default {
    components:{
        'header-templ':PorukeHeader
    }
}
</script>
<style scoped>


</style>