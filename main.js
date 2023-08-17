//Declaração de variaveis
let numero = prompt("Informe o Número: ")

//Verifica se algo foi digitado
if (numero == "")
    document.write("Preencha o campo com um número!")

//Processamento
else if (numero % 2 == 0) {
    document.write("O número " + numero + " é par!")
}
else {
    document.write("O número " + numero + " não é par.")
}
