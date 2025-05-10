function calculaMedia(numeros) {
    const soma = numeros.reduce((total, numero) => total + numero, 0)

    return soma / numeros.length
}

module.exports = calculaMedia