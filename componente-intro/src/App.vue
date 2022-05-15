<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Count from '@/components/Count.vue';

</script>

<template>
  <div id="app">
    <h1>Contadores</h1>
    <Count></Count>
  </div>
</template>
<script>

export default {
  name: 'Count',
  data() {
    return {

    }
  },
  components: {
    Count
  }
}
</script>
<style>

</style>
