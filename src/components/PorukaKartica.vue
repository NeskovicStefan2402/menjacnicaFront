<template>
  <div class="kart">
    <div class="row">
      <div class="col-2">
        <p>{{datum}}</p>
      </div>
      <div class="col-6">
        <div class="row">
          <textarea class="form-control" cols="10" rows="4" disabled>{{poruka.sadrzaj}}</textarea>
        </div>
      </div>
      <div class="col-4">
        <p>{{poruka.email}}</p>
      </div>
    </div>
    <br />
    <div class="row" v-show="odg">
      <textarea id='odgovor' class="form-control" cols="10" rows="3" v-model="odgovor"></textarea>
    </div>
    <br />
    <div class="row">
      <button class="form-control" @click="posaljiOdgovor" id="dugme">Odgovori na poruku</button>
    </div>
  </div>
</template>
<script >
export default {
  props: ["poruka", "index"],
  data() {
    return {
      odgovor: "Unesite odgovor",
      odg: false,
      datum: ""
    };
  },
  created() {
    var datumi = this.poruka.datum.split(" ");
    this.datum =
      datumi[1] + " " + datumi[2] + " " + datumi[3] + " " + datumi[4];
  },
  methods: {
    posaljiOdgovor() {
      var odgovorElement= document.getElementById('odgovor');
      if (this.odgovor!='') {
        odgovorElement.style.borderColor='transparent';
        if (this.odg) {
        //   Posalji odgovor
        this.odg = false;

        this.$store.dispatch("postOdgovor", [
          this.odgovor,
          this.poruka.email,
          "Odgovor na kontakt",
          this.poruka.id
        ]);
        document.getElementById("dugme").innerHTML = "Odgovori na poruku";
        console.log(document.getElementById("dugme"));
        this.$store.state.forma.poruke.splice(this.index, 1);
        this.odgovor = "Unesite odgovor";
      } else {
        document.getElementById("dugme").innerHTML = "Posalji odgovor";
        console.log(document.getElementById("dugme"));
        this.odg = true;
      }
      } else {
        odgovorElement.style.borderColor='red'
      }
      
    }
  }
};
</script>
<style scoped>
.kart {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
  background-color: rgba(165, 165, 165, 0.308);
}
</style>
