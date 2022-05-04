new Vue({
  el: '#app',
  data: {
playerLife:10,
monsterLife:0,
running:true
  },
   computed: {
     hasResult(){
       return this.playerLife == 0 || this.monsterLife == 0
     }

  },
   watch: {

  }, methods: {

  }
})