<template>
        <div id='oNama'>
        <div class="row">
            <div class="col-9">
                    <h1>O nama</h1><br>
                <ol>
                    <li>
                        <b>Poslovnica za izvrsavanje menjackih poslova</b>
                    </li>
                    <br>
                    <li>
                        Smestena u samom <b>centru</b> grada
                    </li>
                    <br>
                    <li>
                        Dosadasnji broj posetilaca: <b>{{posetioci}}</b>
                    </li>
                </ol>
                <br><br>
            </div>
            <div class="col-3">
                
            </div>
        </div>
        
            
    </div>
    
      
</template>
<script>
export default {
    data:function(){
        return{
            posetioci:123
        }
    },
    created() {
        // this.$store.dispatch("poseta");  
        this.posetioci=this.$store.state.forma.counter;
        console.log('Posetioci '+this.posetioci);
    }
}
</script>
<style scoped>
ol {
  list-style: none;
  counter-reset: my-awesome-counter;
}
li {
  counter-increment: my-awesome-counter;
  margin: 0.25rem;
}
li::before {
  content: counter(my-awesome-counter);
  background: #662974;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: inline-block;
  line-height: 2rem;
  color: white;
  text-align: center;
  margin-right: 0.5rem;
}
ol ol li::before {
  background: #DE51FF;
}
ol ol ol li::before {
  background: #EE9EFF;
}

body {
  font-family: 'PT Serif', serif;
}
#oNama{
    background-image: url('../assets/oNama.png');
    margin-top: 100px auto;
    background-size: 100% 100%;
    height: 100vh;
    padding-top: 150px;
}

</style>