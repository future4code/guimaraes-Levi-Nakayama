/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let jogarBlackJack = 0

 if(confirm("bora jogar um blackjack?")) {
       while (jogarBlackJack !== 1){
         const comprarPrimeiraCarta = comprarCarta();
         const comprarSegundaCarta = comprarCarta();
        let pontuacaoUsuario = comprarPrimeiraCarta.valor + comprarSegundaCarta.valor
        console.log(`essa é a pontuacao do usuario:${comprarPrimeiraCarta.texto} ${comprarSegundaCarta.texto} = ${pontuacaoUsuario}`)

        const comprarPrimeiraCartaComputador = comprarCarta()        
        const comprarSegundaCartaComputador = comprarCarta()
        let pontuacaoComputador = comprarPrimeiraCartaComputador.valor + comprarSegundaCartaComputador.valor
        console.log(`essa é a pontuacao do cpu: ${comprarPrimeiraCartaComputador.texto} ${comprarSegundaCartaComputador.texto} = ${pontuacaoComputador}`)
        
         if(pontuacaoUsuario > pontuacaoComputador){
          console.log("usuario ganhou.")


          jogarBlackJack = 1
        } else if(pontuacaoUsuario == pontuacaoComputador){
          console.log("empate.")
        } 
        else{
          console.log("cpu ganhou")
          jogarBlackJack = 1
      }

      }


} else {
  console.log("game over.")
}
   
