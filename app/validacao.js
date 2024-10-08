function verificaChute(chute) {
     const numero = +chute

     if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
        return 
     }

     if (valorrMaiorMenorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor Inválido: Fale um valor entre ${menorValor} e ${maiorValor}</div>
        `
        return
     }

     if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você Acertou !!</h2>
        <h3>O Número Secreto é: ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>

        `
     } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>Você disse:</div>
        <div>O número secreto é maior <i class="fa-solid fa-arrow-down-long"></i></div>

        `
     } else {
        elementoChute.innerHTML += `
        <div>Você disse:</div>
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
     }

    function chuteInvalido() {
        return Number.isNaN(numero)
    }

    function valorrMaiorMenorPermitido(numero) {
        return numero > maiorValor || numero < menorValor
    }
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})