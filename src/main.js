import Vue from 'vue';
import './plugins/fontawesome'
import App from './App.vue';
import router from './router';
import axios from "axios";
import vuetify from './plugins/vuetify';
// Import Font Awesome 
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "https://tranquil-lake-49156.herokuapp.com/" : "/";

// Set up FontAwesome
library.add(faUserSecret);
Vue.component('font-awesome-icon', FontAwesomeIcon);
dom.watch();

//VuePhoneNumberInput
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

Vue.component('vue-phone-number-input', VuePhoneNumberInput);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
