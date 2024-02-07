function verificar() {
    var idade = document.getElementById('idad').querySelector('input[name="ida"]').value;
    var tamanho = document.getElementById('tamanho').querySelector('input[name="tam"]').value;
   
    if (idade < 1.2) {
        alert('Foi detectado um cão filhote, tamanho ' + tamanho);
    } else if(idade > 1,3) {
        alert('Foi detectado um cão adulto, tamanho ' + tamanho);
    }
}