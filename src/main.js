import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'
import {store} from './store/store'; 
import {routes} from './routes';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
window.axios = require('axios');
export const eventBus=new Vue();
Vue.use(VueRouter);
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
const router=new VueRouter({
	mode: 'history',
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return { selector: to.hash }
		} else if (savedPosition) {
    		return savedPosition;
    	} else {
			return { x: 0, y: 0 }
		}
		
	}
});
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
