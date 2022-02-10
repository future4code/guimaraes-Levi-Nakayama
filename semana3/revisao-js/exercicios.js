// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
     return array.length
}
 
// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse(array)
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   const numeroCrescente = array.sort(function(a,b){
        return a - b;
    })
    return numeroCrescente
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const verificaPar = (array) => {
        if(array % 2 === 0)
        return true
    }
    return array.filter(verificaPar)
} 

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayNova = []
    for(let num of array)  {
       if(num % 2 === 0) {
        arrayNova.push(Math.pow(num , 2))  
                            
       }
      
       }
   
    return arrayNova
} 




// EXERCÍCIO 06

function retornaMaiorNumero(array) {
    let maior = 0

       for(let indice = 0; indice < array.length; indice++){
        if(array[indice] > maior){
            maior = array[indice]
                 
        } 
        
  } 
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let numeros = {
    maiorNumero: '',
    maiorDivisivelPorMenor: '',
    diferenca: '',}
    
    if(num1 > num2) {
        numeros.maiorNumero = num1;
        if (num1 % num2 === 0){
            numeros.maiorDivisivelPorMenor = true;
        }
        else {
            numeros.maiorDivisivelPorMenor = false;
        }
        numeros.diferenca = num1 - num2;
    }
    else {
        numeros.maiorNumero = num2;
        if (num2 % num1 === 0){
            numeros.maiorDivisivelPorMenor = true;
        }
        else {
            numeros.maiorDivisivelPorMenor = false;
             }
             numeros.diferenca = num2 - num1;
    }
    return numeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
       let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;
   }


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA == ladoB && ladoA == ladoC)
        return "Equilátero"
    else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC )
        return "Isósceles"
        else
        return "Escaleno"
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let novaArray = array.sort(function compararNumeros(a, b) {
        return a - b;
      });

    return [novaArray[novaArray.length - 2], novaArray[1]];
}

// EXERCÍCIO 11
//contei com a ajuda da Laine =D
function retornaChamadaDeFilme(filme) {
   
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
                const pessoaUm = {
                    nome: ` `,
                    idade: ` `,
                    email: ` `,
                    endereco: ` `,
                }

                let pessoaAnonima = {
                    ...pessoa,
                    nome: "ANÔNIMO",
                }
                 return pessoaAnonima
            }


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
        let pessoasAutorizadas = pessoas.filter((pessoas) => {
            
            return (pessoas.altura > 1.5 && pessoas.idade > 14 && pessoas.idade < 60)
})
            return pessoasAutorizadas
}
            
// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = pessoas.filter((pessoas) => {
            
        return !(pessoas.altura > 1.5 && pessoas.idade > 14 && pessoas.idade < 60)
})
        return pessoasNaoAutorizadas
}
    


// EXERCÍCIO 14
// contei com a ajuda do thi viera!!!
function retornaContasComSaldoAtualizado(contas) {
    contas[0].saldoTotal = 500;
    contas[1].saldoTotal = 6260;
    contas[2].saldoTotal = -3340;
    contas[3].saldoTotal = -1900;
    contas[4].saldoTotal = 1300;
    contas[5].saldoTotal = 1400;

    contas[0].compras = [];
    contas[1].compras = [];
    contas[2].compras = [];
    contas[3].compras = [];
    contas[4].compras = [];
    contas[5].compras = [];

    return contas; 

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let consultaOrdem = [];

    for (var i = 0; i < consultas.length; i++)
    {
        consultaOrdem.push(consultas[i].nome);
    }

    consultaOrdem.sort();

    let novoArrayOrdem = [];

    for (var i = 0; i < consultaOrdem.length; i++)
    {
        for (var indiceUm = 0; indiceUm < consultas.length; indiceUm++)
        {
            if (consultaOrdem[i] === consultas[indiceUm].nome)
            {
                novoArrayOrdem.push(consultas[indiceUm]);
            }
        }
    }
    return novoArrayOrdem;
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  //esse exercício consegui resolver graças a ajuda do aluno leto sotero.

  for (let consulta of consultas)

        consulta.dataDaConsulta = consulta.dataDaConsulta.split('/').reverse().toString().replaceAll(',', '');
    
    consultas.sort(function (a, b) {
        return (a.dataDaConsulta > b.dataDaConsulta) ? 1 : ((b.dataDaConsulta > a.dataDaConsulta) ? -1 : 0);
    })

    

    for (let indice of consultas)
        indice.dataDaConsulta = indice.dataDaConsulta.replace(/^(\d{4})(\d{2})(\d{2}).*/, '$3/$2/$1');
   

    return consultas

}