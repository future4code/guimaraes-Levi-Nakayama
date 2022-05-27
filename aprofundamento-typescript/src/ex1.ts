// exercicio 1

//const minhaString : string = 55
//src/ex1.ts:3:7 - error TS2322: Type 'number' is not assignable to type 'string'.

const meuNumero: number | string = "55"
//src/ex1.ts:5:7 - error TS2322: Type 'string' is not assignable to type 'number'.


enum coresArcoIris {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    ROXO = "roxo"

}

const newObjectOne: {nome: string, idade: number, corFavorita: string} = {
    nome: "Meepo",
    idade: 122,
    corFavorita: coresArcoIris.ROXO
    
}

const newObjectTwo: {nome: string, idade: number, corFavorita: string} = {
    nome: "Phaton",
    idade: 1000,
    corFavorita: coresArcoIris.AMARELO
}

const newObjectThree: {nome: string, idade: number, corFavorita: string} = {
    nome: "Lancer",
    idade: 77,
    corFavorita: coresArcoIris.VERDE
}


//const pessoa: {nome: string, idade: number, corFavorita: string} = {}

console.log(newObjectOne)


