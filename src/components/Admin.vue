<template>
<div class="row pozadina">
    
    <div class="col-3"></div>
    <div class="col-9">
        <br>
        <hr>
            <router-view class="telo"></router-view>
    </div>
</div>
</template>
<script>
export default {
  
};
</script>
<style scoped>
.pozadina {
  background-color: white;
  height: 100vh;
  overflow: auto;
  position:absolute; 
    top: 0; 
    left:0; 
    right:0; 
    bottom:0
  /* height: 100vh; */
  
}
.telo{
    margin:40px;
}

</style>