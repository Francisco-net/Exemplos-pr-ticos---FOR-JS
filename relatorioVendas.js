

let vendasPorDia = [10, 15, 8, 20, 25, 30, 18];

let diasDaSemana = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo",
];

for (let i = 0; i < 7; i++) {
  console.log(`${diasDaSemana[i]}: ${vendasPorDia[i]} vendas`);
}
