const prompt = require("prompt-sync")();

// Local onde sera armazenado os jogos
const jogos = []

// Função de criação do jogo
const criar = () => {
    const nome = prompt("Nome do jogo: ")
    const ano_lancamento = prompt("Ano de lançamento: ")
    const duracao = prompt("Duração media em horas: ")
    const preco  = prompt("Preço: ")
    const estudio = prompt("Qual o etudio do jogo ? ")
    const sequencia = prompt("Qual é a sequencia do jogo ? ")
    
    if(
        nome != "" && 
        ano_lancamento >= 1962 && ano_lancamento <= 2024 &&
        duracao > 0 && 
        preco == 0 &&
        estudio != "" &&
        ((sequencia > 0 && sequencia <  jogos.length)  || jogos.length == 0 )

    ){
        jogos.push({
            nome, 
            ano_lancamento, 
            duracao, 
            preco, 
            estudio, 
            sequencia
        })
        console.log("JOgo cadastrado com sucesso");
    }else {
        console.log("Dados invalidos.");
    }
}