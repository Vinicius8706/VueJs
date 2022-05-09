import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import Contador from './Contador.vue'

Vue.component('app-contador',Contador)
createApp(App).mount('#app')
