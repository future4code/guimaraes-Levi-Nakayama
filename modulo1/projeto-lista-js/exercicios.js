// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

  let altura1 = prompt('altura')
  let largura1 = prompt('largura')

  const area = altura1 * largura1
  
  console.log(area)
 

} 

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = Number(prompt('digite ano atual'))
let anoNascimento = Number(prompt('digite ano de nascimento'))

console.log(anoAtual-anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 
 const IMC = peso / (altura*altura)

 return IMC
  
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nome1 = prompt('digite o seu nome')
  const idade1 = prompt('digite a sua idade')
  const email1 = prompt('digite o seu email')

  console.log('Meu nome é ' +nome1+', tenho ' +idade1+ ' anos, e o meu email é ' +email1+'.')
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt('cor1')
const cor2 = prompt('cor2')
const cor3 = prompt('cor3')

const listaCor = [cor1,cor2,cor3]

console.log(listaCor)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

    
  const stringMaiusculo = string.toUpperCase()

  return stringMaiusculo
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
 
  return custo / valorIngresso


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

 const string3 = string1.length 
 const string4 = string2.length


 return string3 === string4

  

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

 return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length -1] 
} 
// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

const primeiroElemento = array[0]
const segundoElemento = array[array.length -1]

array[0] = segundoElemento
array[array.length -1] = primeiroElemento

return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica