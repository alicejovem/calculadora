var numeroUm = 0
var numeroDois = 0
var operador
function calcular(numeroUm, operador, numeroDois, ) {
    switch (operador) {
        case "+": return numeroUm + numeroDois
        case "-": return numeroUm - numeroDois
        case "*": return numeroUm * numeroDois
        case "/": return numeroUm / numeroDois
        case "%": return numeroUm % numeroDois
    }
}

function setarNumero(numero) {
    var valor = document.getElementById("visor").innerText
    if (!operador) {
        numeroUm = valor + numero
    }
    else {
        numeroDois = numeroDois + "" + numero
    }
    document.getElementById("visor").innerHTML += numero
}

function setarOperador(op) {
    if (!operador) {
        operador = op
    }
    else {
        setarResultado()
        operador = op
    }
    document.getElementById("visor").innerHTML += op
}

function setarResultado() {
    var resultado = 0
    if (numeroUm && operador && numeroDois) {
        resultado = calcular(parseFloat(numeroUm),operador, parseFloat(numeroDois))
    }
    document.getElementById("visor").innerHTML = resultado
    operador = ""
}

function apagar() {
    numeroUm = 0
    numeroDois = 0
    operador = ""
    document.getElementById("visor").innerHTML = ""
}