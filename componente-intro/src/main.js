import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import ComponenteContador from './ComponenteContador.vue'

Vue.config.productionTip=false
Vue.component('app-contador',ComponenteContador)
createApp(App).mount('#app')

newVue({
  render:h=>h(App),
}).$mount('#app')

