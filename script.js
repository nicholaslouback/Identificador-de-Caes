function verificar() {
    var idade = document.querySelector('idad')
    var tamanho = document.querySelector('tam')
    var sexo = document.querySelector('sexo')
    if(idade >= 0 || idade <= 1) {
        window.alert('Seu cão é filhote')
    }
}