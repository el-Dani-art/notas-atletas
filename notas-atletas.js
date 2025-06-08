//Função para o calculo da média.
function mediaAtletas(nomes, notas) {
  let notasParaMedia = [];
  let notasOrdem = [];
  let soma = 0;
  let media = 0;

  //Organizar na ordem crescente, foi necessário corrigir o método sort().
  notasOrdem = notas.sort(function (a, b) {
    return a - b;
  });

  //Retirando a primeira e última nota.
  for (let i = 1; i < notasOrdem.length - 1; i++) {
    notasParaMedia[i] = notasOrdem[i];
  }

  //Soma das notas e média final
  soma = notasParaMedia.reduce(function (total, atual) {
    total = total + atual;
    return total;
  }, 0);

  media = soma / (notasParaMedia.length - 1);

  //Resultado final, arrendondado para 3 números depois da virgula, caso queira retirar essa opção deletar o método toFixed(3).
  return console.log(`${nomes}: ${media.toFixed(3)}.`);
}

//Entrada de dados
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88],
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33],
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8],
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5],
  },
];

//Chamando a função:

let mediaFinal = [];
for (let i = 0; i <= atletas.length - 1; i++) {
  mediaAtletas(atletas[i].nome, atletas[i].notas);
}
