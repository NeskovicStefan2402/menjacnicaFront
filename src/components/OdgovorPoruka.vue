<template>
    <div>
        <div class="kart">
            <div class="row">
                <div class="col-1">
                    <b>Naslov: </b>
                </div>
                <div class="col-11">
                        <input type="text" :value="odgovor.naslov" class="form-control" disabled>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-1">
                    <b>Za: </b>
                </div>
                <div class="col-11">
                        <input type="text" :value="odgovor.primalac" class="form-control" disabled>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-2">
                    <i>{{datum}}</i>
                </div>
                <div class="col-10">
                    <textarea class="form-control" cols="10" rows="5"  disabled>{{odgovor.sadrzaj}}</textarea>
                </div>
            </div>
            
        </div>
        <div v-if="odgovor.poruka!=null" class="row">
            <div class="col-3">
                <img src="../assets/convert.png" height="60px" width="60px" style="margin-right: 0;">
            </div>
            <div class="col-9 porukaKart">
                <div class="row">    
                    <div class="col-4">   
                        <h4><b>Poruka od klijenta:</b></h4> 
                        <br>
                        <i>{{datumPoruke}}</i>
                        <br>
                        <i>{{vremePoruke}}</i>
                    </div>
                    <div class="col-8">
                        <textarea class="form-control" cols="10" rows="5"  disabled>{{odgovor.poruka.sadrzaj}}</textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['odgovor'],
    data(){
        return{
            datum:'',
            datumPoruke:'',
            vremePoruke:''
        }
    },
    created(){
        var reci=this.odgovor.datum.split(' ')
        this.datum=reci[1]+' '+reci[2]+' '+reci[3]+' '+reci[4];
        if(this.odgovor.poruka!=null){
            var reciPoruke=this.odgovor.poruka.datum.split(' ')    
            this.datumPoruke=reci[1]+' '+reci[2]+' '+reci[3];
            this.vremePoruke=reci[4];    
        }
    }
}
</script>
<style scoped>
.kart {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 10px auto;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  background-color: rgba(165, 165, 165, 0.308);
}
.porukaKart {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 10px auto;

  margin-top: 0px;
  text-align: center;
  background-color: rgba(129, 84, 241, 0.200);
}
</style>