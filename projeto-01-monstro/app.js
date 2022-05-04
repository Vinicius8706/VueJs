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
console.log(especial,this.getRandom(5,10));
    },
    hurt(min,max,especial){
      const plus = especial ? 5 : 0
      const hurt = this.getRandom(min + plus, max+plus)
      this.playeLife=Math.max(this.playeLife - hurt,0) // evitar que o dano fim do usuario seja negativo
      // somar o valor minimo e maximo para ter um regime entre os valores maiores
    },
    getRandom(min,max){
      const value = Math.random() *(max - min) + min
      return Math.round(value)
    }

  }
})