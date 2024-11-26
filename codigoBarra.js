function gerarCodigoDeBarras() {
  let codigo = "";
  for (let i = 0; i < 12; i++) {
    codigo += Math.floor(Math.random() * 10);
  }
  return codigo;
}
let i;
for (i = 0; i < 5; i++) {
  let codigoDeBarras = gerarCodigoDeBarras();
  console.log(`Código de barras ${i + 1}: ${codigoDeBarras}`);
}
