//1 { nome: "Amanda Rangel", apelido: "Mandi" },
  //{ nome: "Laís Petra", apelido: "Laura" },
  //{ nome: "Letícia Chijo", apelido: "Chijo" }

  //2 { nome: "Amanda Rangel"},
  //{ nome: "Laís Petra"},
  //{ nome: "Letícia Chijo"},

  //3  { nome: "Amanda Rangel", apelido: "Mandi" },
 // { nome: "Laís Petra", apelido: "Laura" },

 const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

    const nomesApenasPets = pets.map((item, raca, array) => {
        return item.nome
    })

    console.log(nomesApenasPets)

    const apenasDogSalsicha = pets.filter((item, raca, array)=> {
        return item.raca == "Salsicha"
    })

    console.log(apenasDogSalsicha)

    const mensagemDesconto = nomePoodle => `o seu ${nomePoodle} poodlezin vai ficar menos fidido com esses 10% de desconto.`;
    const dogPoodle = pets.filter(pet => pets.raca === "Poodle")  
    const mensagens = dogPoodle.map(dogPoodle => {
        return mensagemDesconto(dogPoodle.nome)
    })

    
        const produtos = [
            { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
            { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
            { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
            { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
            { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
            { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
            { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
            { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
            { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
            { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
        ]

        const nomeProdutos = produtos.map((item, categoria, preco) => {
            return item.nome
        })

        console.log(nomeProdutos)

        const descontoDe5NoPreco = (produtos) => {
            return produtos.map(produto => {
                return {
                    nome: produto.nome ,
                    preco: produto.preco*0.95
                }
            })
        }

console.log(descontoDe5NoPreco(produtos))


