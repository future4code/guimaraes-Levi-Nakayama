let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)

//acima está a solucáo
//antes da soluçao, iria aparecer apenas a junçao de duas strings. ou seja, se colocar 1 e depois 1, nao iria somar e sim mostrar o número 11.

let idade = prompt("qual a sua idade?")
let idadeMelhoramigo = prompt("qual a idade do seu melhor amigo?")

console.log("sua idade é maior do que a do seu amigo?", idade >= idadeMelhoramigo)

let par = prompt("insira um número par")
console.log(par%2)
//se caso digitar um número ímpar, irá mostrar o resto e nao zero.

let anos = prompt("digite sua idade em anos.")

console.log(anos*12)
console.log(anos*365)
console.log(anos*8760)

let n1 = prompt("digite o primeiro número")
let n2 = prompt("digite o segundo número")

const n3 = (n1%n2)
const n4 = (n2%n1)

console.log("o primeiro número é maior que o segundo?", n1>n2)
console.log("o primeiro número é igual ao segundo?", n1===n2)
console.log("o primeiro número é divisível pelo segundo?", n3===0)
console.log("o segundo número é divisível pelo primeiro?", n4===0)

const k1 = (77 - 32)*(5/9) + 273.15
const f1 = 80*(9/5) + 32
const f2 = 30*(9/5) + 32
const k2 = (f2 -32)*(9/5) + 273.15


console.log(k1+"°K")
console.log(f1+"°F")
console.log(f2+"°F", k2+"°K")

let c1 = prompt("digite uma temperatura em °C")
const f3 = c1*(9/5) + 32
const k3 = (f3 -32)*(9/5) + 273.15
console.log(c1+"°C", f3+"°F" , k3+"°K")

const qh = 0.05
let resi1 = 280*qh
let desc = resi1*0.15
let resi2 = resi1-desc

console.log("R$"+resi1 , "e Valor de desconto em R$"+resi2)

let kg01 = 1
let lb = kg01*2.20
let oz = kg01*0.02

let kg02 = 20*lb
let kg03 = 10.5*oz

console.log("20lb equivalem a",kg02+"kg")
console.log("10.5oz equivalem a",kg03+"kg")

let metro1 = 1
let milha1 = metro1*0.000621371
let pes1 = metro1*0.3048

let metro02 = 100*milha1
let metro03 = 50*pes1

console.log("100mi equivalem a", metro02+"m")
console.log("50ft equivalem a", metro03+"m")

let litro1 = 1
let gal = litro1*0.264172
let xic = litro1/4

let litro2 = 103.56*gal
let litro3 = 450*xic

console.log("103.56gal equivalem a ", litro2+"litros")
console.log("450xic equivalem a ", litro3+"litros")