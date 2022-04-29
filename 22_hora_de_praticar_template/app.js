new Vue({
  el: '#desafio',
  data: {
    nome: 'Vinicius Farias',
    idade: 21,
    linkHtml: '<a href="http://google.com"></a>',
    linkImage: 'https://www.google.com/search?q=zoro&rlz=1C1FCXM_pt-PTBR995BR995&sxsrf=ALiCzsa30IG7T_gcEa0MGrrHSLIS5ZXHWA:1651268380066&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjH2eOJnrr3AhX2D7kGHZ7lBXUQ_AUoAXoECAIQAw&biw=1920&bih=969&dpr=1#imgrc=ekbSGKk2XBVcfM'
  },
  methods: {
      randomNumber : function(){
        return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    }
  } // metodos que acontecem em eventos no html
})