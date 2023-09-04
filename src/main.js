import { createApp } from 'vue';
import App from './App.vue';
// import router from './Routes/Route.js';
import VueScrollTo from 'vue-scrollto';
import "./assets/scss/global.scss";

createApp(App)
  // .use(router)
  .use(VueScrollTo, {
    duration: 50,
    easing: 'ease',
  })
  .mount('#app');
