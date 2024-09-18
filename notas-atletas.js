let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

//Percorre cada objeto realizando os cálculos na propriedade notas dos objetos
for (let i = 0; i < atletas.length; i++) {

      let nome = atletas[i].nome

      let notas = atletas[i].notas
    
//Organiza o vetor notas de cada objeto do menor para o maior
  let notasOrganizadas = atletas[i].notas.sort(function(a, b){
    return a - b
  });

//Separa as 3 notas válidas eliminando a maior e a menor nota índices 1 e 4 do vetor 
  let notasValidas = atletas[i].notas.slice(1,4);
    
//Soma as notas válidas de cada vetor notas.
  let somaDasNotas = notasValidas.reduce(function (total, atual) {
    return total + atual;
  },0);

  let mediaValida = somaDasNotas/notasValidas.length

  console.log("______________________________________")
  console.log(`Atleta: ${nome}`)
  console.log(`Notas Obtidas: ${notas}`)
//console.log(`Notas Válidas: ${notasValidas}`)
  console.log(`Média Válida: ${mediaValida}`)
  console.log("--------------------------------------")

}

