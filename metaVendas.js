const meta = 5000;

let vendas = [4500, 6000, 7000, 4000, 8000];
for (let i = 0; i < 5; i++) {
  if (vendas[i] >= meta) {
    console.log(`Vendedor ${i + 1} atingiu a meta com R$ ${vendas[i]}`);
  } else {
    console.log(`Vendedor ${i + 1} NÃO atingiu a meta com R$ ${vendas[i]}`);
  };
};
