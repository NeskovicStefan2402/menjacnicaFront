<template>
  <div id="kursna">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Valuta</th>
          <th scope="col">Naziv</th>
          <th scope="col">Kupovni</th>
          <th scope="col">Srednji</th>
          <th scope="col">Prodajni</th>
        </tr>
      </thead>
      <tbody v-for="i in valute">
        <tr>
          <th scope="row">{{i.naziv}}</th>
          <td>{{i.skracenica}}</td>
          <td>{{i.kupovni}}</td>
          <td>{{i.srednji}}</td>
          <td>{{i.prodajni}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  computed: {
    valute() {
      return this.$store.state.forma.valute;
    }
  }
};
</script>
<style scoped>
div {
  background-image: url('../assets/kursna.jpg');
    background-size: 100% 100%;
    height: 100vh;
    /* border-radius: 10px; */
    /* margin: 100px auto; */
    height: 100vh;
}
#kursna{
  height: 100vh;
}
</style>