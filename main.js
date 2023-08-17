//Declaração de variaveis
let numero = Number(prompt("Informe o Número (apenas números inteiros): "))

//Verifica o que foi digitado
if (numero == "") {
    document.write("Preencha o campo com um número!")
}
else if(isNaN(numero)) {
    document.write("Isso não é um número")
}
else if(!Number.isInteger(numero)){
    document.write("Digita apenas números inteiros!")
}
//Processamento
else if (numero % 2 == 0) {
    document.write("O número " + numero + " é par!")
}
else {
    document.write("O número " + numero + " não é par.")
}
