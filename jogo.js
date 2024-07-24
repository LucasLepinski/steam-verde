const prompt = require ("prompt-sync")();

const jogos = []
const validarIndice = indice => indice >= 0 && indice < jogos.length

const criar = () => {
    // let classind = prompt("Informe a classificação indicativa do jogo: ")
    // let genero = prompt("Informe o gênero de seu jogo: ")
    const nome = prompt("Nome do jogo: ")
    const ano_lancamento = prompt("Informe o ano de lançamento do jogo: ")
    const duracao = prompt ("Informe a duração média do jogo: ")
    const preco = prompt ("Informe o preço do jogo: ")
    const estudio = prompt ("Informe o estudio do jogo: ")
    const sequencia = -1
    if (listar()) {
    sequencia = prompt ("Informe a sequencia do jogo? Digite 0 se nao houver: ") -1;
    }

    if (
        nome != "" &&
        ano_lancamento >= 1962 && ano_lancamento <= 2024 &&
        duracao > 0 &&
        preço >= 0 &&
        estudio != "" &&
        ((sequencia >= 0 && sequencia < jogos.length) || jogos.length == 0)){
        
        console.log("Jogo cadastrado com sucesso!")
    } else {
        console.log("Dados inválidos!")
    }
{
    jogos.push({
        nome, ano_lancamento, duracao, preco, estudio, sequencia
    })
}

const listar = () => {
    if(jogos.length == 0){
        console.log("Nenhum jogo encontrado!")
        return false
    } else {
        jogos.forEach((jogo, indice) => {
            console.log(`
            ${indice + 1}
            Nome: ${jogo.nome}
            Ano de Lançamento: ${jogo.ano_lancamento}
            Duração: ${jogo.duracao}
            Preço: ${jogo.preco}
            Estudio: ${jogo.estudio}
            Sequência: ${jogo.sequencia}
            `)
        })
        return true
    }
}

const atualizar = () => {
    if (!listar ()) {
        return
    }

const indice = prompt ("Qual o indice que deseja atualizar")

 const jogo = modelo()

 if(
    jogo != undefined && 
    indice > 0 &&
    indice <  jogos,length
){
 jogos [indice] = jogo

 console.log( "Jogo atualizado com sucesso");
} else {
    console.log("Falha na atualização");
        }
    }
};

const remover = () => {
    if (listar ()) {
        return
    }

const indice = prompt ("Qual o indice que deseja remover ?") -1;

if (indice >= 0 && indice < jogos.length) {

}

};
