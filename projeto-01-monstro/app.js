new Vue({
  el: '#app',
  data: {
playerLife:100,
monsterLife:100,
running:true
  },
   computed: {
     hasResult(){
       return this.playerLife == 0 || this.monsterLife == 0
     }

  },
   watch: {

  }, methods: {
    startGame(){
      this.running = true
      this.monsterLife = 100
      this.playerLife = 100
    },
    attack(especial){

    },
    getRandom(min,max){
      const value = Math.random() *(max - min) + min
      return Math.rount(value)
    }

  }
})