function preencher(valor) {

    document.getElementById('visor').value += valor;

}

function limpar() {

    document.getElementById('visor').value = '';

}

function calculo(valor) {

    try {
        var resultado = 0;
        resultado = document.getElementById('visor').value;
        document.getElementById('visor').value = '';
        document.getElementById('visor').value = eval(resultado);
    } catch (err) {

        alert("Expressão inválida");
    }

}

function raiz() {

    var root = 0;
    root = document.getElementById('visor').value;
    document.getElementById('visor').value = '';
    document.getElementById('visor').value = Math.sqrt(root);

}

//Função que calcula porcentagem
function percent() {

    var perct = 0;
    perct = document.getElementById('visor').value;
    document.getElementById('visor').value = '';
    perct = eval(perct);
    document.getElementById('visor').value = perct / 100;

}