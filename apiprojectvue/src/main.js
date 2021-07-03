import Vue from "vue";
import App from "./App.vue";
import router from "./router";

{
  /* <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> */
}
{
  /* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
