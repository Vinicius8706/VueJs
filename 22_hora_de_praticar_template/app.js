new Vue({
  el: '#desafio',
  data: {
    nome: 'Vinicius Farias',
    idade: 21,
    linkHtml: '<a href="http://google.com"></a>',
    linkImage: 'https://ovicio.com.br/wp-content/uploads/2021/07/20210712-one-piece-zoro-wano-postcover-1024x576.jpg'
  },
  methods: {
      randomNumber : function(){
        return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    }
    ,
    alterarInput: function(event){
      this.nome = event.target.value
    }
  } // metodos que acontecem em eventos no html
})