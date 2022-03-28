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

const personagemDois = {
    nome: "Murilo",
    idade: 40,
    profissao: "programador"
}

const contagem = (pessoa) => {

let array = [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]

return array

}
console.log(contagem(personagemUm))
console.log(contagem(personagemDois))


let carrinho = []

const banana = {
    nome: "banana",
    disponibilidade: true
}

const abacaxi = {
    nome: "abacaxi",
    disponibilidade: true
}

const laranja = {
    nome: "laranja",
    disponibilidade: true
}

const sacolao = (fruta) => {
 carrinho.push(fruta)

 return carrinho
}

console.log("carrinho",sacolao(abacaxi))
console.log("carrinho", sacolao(laranja))
console.log("carrinho", sacolao(laranja))

const perguntaNome = prompt("qual o seu nome?")
const perguntaIdade = prompt("qual a sua idade?")
const perguntaProfissao = prompt("qual a sua profissao?")

const perfil = () => {
    
    meuNome: perguntaNome
    minhaIdade: perguntaIdade
    minhaProfissao: perguntaProfissao
    
    return perfil
}

console.log(perfil(perguntaNome,perguntaIdade,perguntaProfissao))

console.log(perfil)
