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

let notasComputadas = atletas[0].notas.slice(1, -1)
console.log(notasComputadas)

let soma = 0
let media = 0
notasComputadas.forEach(function (nota) {
  soma = soma + nota
  media = soma / 3
})

console.log(`Atleta: "${atletas[0].nome}" Notas Obtidas : "${atletas[0].notas}" Média Valida: "${media}"`)
