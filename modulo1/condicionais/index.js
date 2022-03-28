//ex. interpretacao
//1. a. ele realiza um teste com divisao, se tem ou nao restos.
//1. b. divisao exatas, sem restos.
//1. c. divisoes onde tem restos.

//2. a. para saber preços de frutas.
//2. b. o preço da fruta maça é R$ 2,25.
//2. c. 5

//3. a. pedindo para o usuário colocar um número.
//3. b. se for 10, o número passou no teste. se for -10, essa mensagem é secreta.
//3. c. mensagem nao tem algo definido. ele nao tem nenhum valor local ou global.

//const dirigir = Number(prompt("qual a sua idade?"))

//if (dirigir > 18){

  //  console.log("você pode dirigir")
//}
    

  //  else {
    //console.log("você nao pode dirigir")

//}


//let turnoAluno = prompt("qual periodo vc estuda? digite M para matutino, V para Vespertino ou N para Noturno.").toUpperCase()

//if (turnoAluno === "M") {
  //  console.log("Matutino")
//}

//if (turnoAluno === "V") {
  //  console.log("Vespertino")
//}

//if (turnoAluno === "N") {
  //  console.log("Noturno")
//}






//let turnoAluno = prompt("qual periodo vc estuda? digite M para matutino, V para Vespertino ou N para Noturno.").toUpperCase()

//let periodoAluno
//switch (turnoAluno) {
  //  case "M":
    //    periodoAluno = "Matutino"
        
      //  break;

        //case "V":
          //  periodoAluno = "Vespertino"
            
            //break;

            
    //case "N":
      //  periodoAluno = "Noturno"
        
       // break;

    //default:
      //  periodoAluno = "digite período válido"
        //break;
//}

//console.log(periodoAluno)

//const assitirFilme = (generoFilme, precoIngresso) => 
//{ 
  //      if (generoFilmeUsuario && precoIngressoUsuario)
    //    console.log("bom filme!")
//else {

  //  console.log("escolha outro filme.")

//}}


//let generoFilmeUsuario = prompt("qual o gênero do filme?").toLowerCase() === "fantasia"
//let precoIngressoUsuario = Number(prompt("qual o valor do ingresso?")) < 15


//assitirFilme (generoFilmeUsuario, precoIngressoUsuario)

//const assitirFilme = (generoFilme, precoIngresso) => 
//{ 
  //      if (generoFilmeUsuario && precoIngressoUsuario)
    //    lanchinho = prompt("qual lanchinho vocë quer comprar")
//else {

  //  console.log("escolha outro filme.")
 //return lanchinho
//}}


//let generoFilmeUsuario = prompt("qual o gênero do filme?").toLowerCase() === "fantasia"
//let precoIngressoUsuario = Number(prompt("qual o valor do ingresso?")) < 15

//assitirFilme (generoFilmeUsuario, precoIngressoUsuario)

//console.log(`bom filme! e aproveite o seu ${lanchinho}`)

const nomeCompleto = prompt("qual o seu nome completo?")
const tipoDeJogo = prompt("será jogo IN (internacional) ou NA (nacional)?").toUpperCase()
const etapaDoJogo = prompt("será SF (semi-final), DT (disputa do terceiro lugar) ou FI (final)? Coloque apenas a sigla de cada um.").toUpperCase()
const categoria = Number(prompt("qual categoria será? 1, 2, 3 ou 4?"))
const quantidadeIngressos = Number(prompt("qual a quantidade de ingressos?"))

switch (tipoDeJogo) {
    case "IN":
         console.log("Internacional")      
        
        break;
    
        case "NA":
            console.log("Nacional")
break

    }


switch (etapaDoJogo) {
    case "SF":
        console.log("Semi-Final")
        
        break;

        
    case "DT":
        console.log("Terceiro-lugar")

        break

    case "FI":
        console.log("final")
    break
    
        }


switch (categoria) {
    case 1:
        console.log("Categoria 1")
        break;

        case 2:
            console.log("Categoria 2")
            break;

            case 3:
                console.log("Categoria 3")
                break;

                case 4:
                    console.log("Categoria 4")
                    break;

                    
}

const valorDoIngresso = (etapaDoJogo,categoria)

switch (etapaDoJogo,categoria) {
    case "SF", 1:
        console.log("R$ 1320")
        
        break;

        case "SF", 2:
            console.log("R$ 880")
            
            break;

            case "SF", 3:
        console.log("R$ 550")

        break;

        case "SF", 4:
        console.log("R$ 220")
        
        break;

        case "DT", 1:
            console.log("R$ 660")
            
            break;
    
            case "DT", 2:
                console.log("R$ 440")
                
                break;
    
                case "DT", 3:
            console.log("R$ 330")
    
            break;
    
            case "DT", 4:
            console.log("R$ 1700")
            
            break;
       

            case "FI", 1:
                console.log("R$ 1980")
                
                break;
        
                case "DT", 2:
                    console.log("R$ 1320")
                    
                    break;
        
                    case "DT", 3:
                console.log("R$ 880")
        
                break;
        
                case "DT", 4:
                console.log("R$ 330")
                
                break;
           
    
   }

let valorTotal = (quantidadeIngressos*valorDoIngresso)

console.log(nomeCompleto, tipoDeJogo, etapaDoJogo, categoria, `${quantidadeIngressos} ingressos`, valorDoIngresso, valorTotal)