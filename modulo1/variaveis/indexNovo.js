//1 0 {nome: 'Amanda Rangel', apelido: 'Mandi'}
// 1 {nome: 'Laís Petra', apelido: 'Laura'}
// 2 {nome: 'Letícia Chijo', apelido: 'Chijo'}


//2 amanda rangel, lais petra, leticia chijo

//3 mandi, laura

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

const apenasNomesDoPets = pets.map((item,index,array) => {
       return item.nome

})

console.log(apenasNomesDoPets)

const apenasSalsicha = pets.filter((item,index,array) => {
      return item.raca === "Salsicha"
})

console.log(apenasSalsicha)



