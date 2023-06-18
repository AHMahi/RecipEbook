import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import 'bulma/css/bulma.css';
import "./assets/global.css";
import 'typeface-poppins';
import 'typeface-source-sans-pro';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCartShopping, faSearch, faUserSecret, faBars, faClose } from '@fortawesome/free-solid-svg-icons';

library.add(faUserSecret, faCartShopping, faSearch, faBars, faClose);

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
