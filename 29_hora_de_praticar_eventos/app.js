new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(){
            alert('Alerta recebido')
        },
        armazenar(event) {
            this.valor = event.target.value
        }
    }
})