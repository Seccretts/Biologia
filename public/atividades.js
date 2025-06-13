function verificarRespostas() {
  const respostas = {
    q1: "c",
    q2: "c",
    q3: "b",
    q4: "d"
  };

  let pontuacao = 0;
  const total = Object.keys(respostas).length;

  for (let chave in respostas) {
    const selecionada = document.querySelector(`input[name="${chave}"]:checked`);
    if (selecionada && selecionada.value === respostas[chave]) {
      pontuacao++;
    }
  }

  const resultado = document.getElementById("resultado");
  resultado.textContent = `Você acertou ${pontuacao} de ${total} perguntas.`;
}
