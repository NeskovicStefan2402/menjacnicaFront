<template>
  <div>
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="header-left"></router-view>
    <router-view name="header-poruke"></router-view>
  </div>
</template>

<script>
import Header from './components/Header';
import PorukeHeader from './components/PorukeHeader';
import Telo from './components/Telo';
export default {
  components:{
    'header-templ':Header,
    'telo':Telo,
    'header-poruke':PorukeHeader
  }
}
</script>

<style>

</style>
