
const calcular = document.getElementById('calcular')


// atribui um valor a nome
//nome.value = 'fernanda'

function imc() {
    //alert('teste clique')
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1)

        resultado.textContent = valorIMC

        let classificacao = ''

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso'
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!'
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso'
        } else if (valorIMC < 35) {
            classificacao = 'com obsidade grau 1'
        } else if (valorIMC < 40) {
            classificacao = 'com obsidade grau 2'
        } else {
            classificacao = 'com obsidade grau 3. Cuidado!!'
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao} `


    } else {
        resultado.textContent = "Preencha todos os campos!!"
    }

}


calcular.addEventListener('click', imc)

