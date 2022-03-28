//let valor = 0
//for(let i = 0; i < 5; i++ ) {
//    valor += i
//}
//console.log(valor)
//1 eu rodei mas nao entendi o pq mostrou 10.

//2 a. vai mostar os numeros maiores que 18
//2 b. sim, seria suficiente, basta adicionar for(let i=0 "aqui começamos com o valor 0"; i < lista.length "aqui colocamos todos os índices de cada elemento através do length."; i++ "aqui seria a variável i adicionando um valor por vez.")


//3 irá mostrar 4'* (****)

//const bichinho = Number(prompt("quantos pets tu tem?"))
//let petNome = []

//if(bichinho === 0){
  //  console.log("adote um!")
//} else if(bichinho > 0){
    //for(let i = 0; i < bichinho; i++){
  //  petNome.push(prompt("qual o nome do seu pet?"))
//}

//console.log("os nomes sao:", petNome)

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

const maiorMenor = (array) => {
    let maiorNumero = 0
    let menorNumero = Infinity 

    for(let i=0; i< array.length; i++){
        if(array[i] < menorNumero){
            menorNumero = array[i]

        } else if(array[i] > maiorNumero){
            maiorNumero = array[i]
        }
    }


console.log(`o menor número é: ${menorNumero}`)
console.log(`o maior número é: ${maiorNumero}`)
}

maiorNumero(arrayOriginal)







let jogadorUm = Number(prompt("digite aqui um número."))
console.log("Vamos jogar!")

let acertou = 0


while(acertou !== jogadorUm) {
    
    acertou = Number(prompt("adivinhe o número."))
    
    

            if(jogadorUm > acertou) {
            console.log(`numero chutado foi ${acertou}`)    
            console.log("o número é maior...")
            }
            else if(jogadorUm < acertou){  
                console.log(`numero chutado foi ${acertou}`)
                console.log("o número é menor...")
            }
        
            else if(jogadorUm === acertou){
                console.log("acertô mizeravi.")
            }
        }

    
    
    



