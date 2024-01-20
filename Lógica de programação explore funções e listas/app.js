
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirNomeNaTela(tag, texto) {
    let paragrafo = document.querySelector(tag);
    paragrafo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );

}

function mensagemInicial() {
    exibirNomeNaTela("h1", "Jogo do numero secreto");
    exibirNomeNaTela("p", "Escola um numero de 1 a 10");
}

mensagemInicial();


function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
        exibirNomeNaTela("h1", "Acertou!");
        exibirNomeNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirNomeNaTela("p", "O número é menor");
        } else {
            exibirNomeNaTela("p", "O número é maior");
        }
        tentativas++;
        limparCampo();
    }
    
}

function numeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == 3) {
        listaDeNumerosSorteados = [];
        }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

