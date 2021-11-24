//1 A- Matheus NAchtergaele
//Virginia Cavendish
//Globo - 14h

// 2 A - false e altura náo tem, seria null ou undefined 
// false pq tá como descrito ser false backender e null ou undefined pq nao tem nenhuma pripriedade altura

const pessoa = {
    nome: "Marcos",
    apelidos: ["gordo","lindao","brother"]
}


console.log(`Eu sou o ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`)

const novaPessoa= {
    ...pessoa,
    nome: "Marcos",
    novosApelidos: ["legal","paizao","amigo"]
}

console.log(`Eu sou o ${pessoa.nome}, mas pode me chamar de: ${novaPessoa.novosApelidos[0]}, ${novaPessoa.novosApelidos[1]} ou ${novaPessoa.novosApelidos[2]}.`)

const personagemUm = {
    nome: "José",
    idade: 30,
    profissao: "fazendeiro"
}

function contagem() {

      return contagem.length   
}

console.log(personagemUm.nome,contagem(personagemUm.nome), personagemUm.idade, personagemUm.profissao, contagem(personagemUm.profissao))


const carrinho = []

const frutas = [

    {frutinha = "laranja", disponivel = true}, 
    {frutinha = "abacaxi", disponivel = true},
    {frutinha = "banana", disponivel = true}

]
const novoCarrinho = carrinho[push(frutas.frutinha[0], frutas.disponivel[0], frutas.frutinha[1], frutas.disponivel[1], frutas.frutinha[2], frutas.disponivel[2])]

console.log(novoCarrinho)


