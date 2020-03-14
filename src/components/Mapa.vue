<template>
  <div>
    <l-map :zoom="zoom" :center="center" class="map">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker v-if="pocetna!=null" :lat-lng="pocetna" :icon="iconTrenutna" :visible="true"></l-marker>
      <l-marker :lat-lng="marker" :icon="iconOstali"></l-marker>
    </l-map>
    <input id='locate' type="button" value="Lociraj me" class="form-control locateButton" @click="locirajMe()">
  </div>
</template>
<script>
import { LMap, LTileLayer, LMarker} from "vue2-leaflet";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      zoom: 12,
      marker:L.latLng(44.8198114,20.4657058),
      pocetna: null,
      iconTrenutna: L.icon({
        iconUrl: "src/assets/trenutnaIcon.png",
        shadowUrl: '',
        iconSize: [38, 40],
      }),
      iconOstali: L.icon({
        iconUrl: "src/assets/markerIcon.png",
        shadowUrl: '',
        iconSize: [38, 40],
      }),
      center: L.latLng(44.8198114,20.4657058),
      suppressMarkers: true,
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    };
  },
  methods:{
    locirajMe(){
        if(this.pocetna==null){
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(this.showPosition);
            }
            document.getElementById('locate').value='Prekini lociranje';
        }else{
          this.pocetna=null;
          this.zoom=12;
          document.getElementById('locate').value='Lociraj me';
        }
    },
    showPosition(position){
        this.pocetna=L.latLng(position.coords.latitude,position.coords.longitude);
        this.zoom=10;
    }
    }
};
</script>
<style scoped>
.map {
  height:200px;
  }
.trenutnaLokacija {
  background-image: url("../assets/logo.png");
}
.locateButton{
  background-color: #b3a737;
  color: white;
  border: transparent;
}
</style>