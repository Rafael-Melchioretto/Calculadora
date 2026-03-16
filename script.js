function adicionar (valor){
    document.getElementById('visor').value += valor;
}

function limpar () {
    document.getElementById('visor').value = '';
}

function apagar() {
    var visor = document.getElementById('visor');
    visor.value = visor.value.slice(0, -1);
}

function calcular() {
    var visor = document.getElementById('visor');
    try{
        // Usa a função eval() para calcular o resultado
        // Nota: eval() pode ser perigoso com entrada não confiável
        visor.value = eval(visor.value);
    } catch(error) {
        //Se houver um erro na expressão vai mostra Erro no visor
        visor.value = 'Erro'
    }
}