// Importa o array exportado de data.js
import { httpCatData } from './data.js';

// Pegar o input e o botão
const inputBusca = document.getElementById("numero-status-code");
const btnBusca = document.querySelector(".pesquisar-btn");

// Função auxiliar que faz a busca e redireciona
function pesquisarStatusCode() {
  // Pegamos o valor digitado
  const valorDigitado = inputBusca.value.trim();

  // Só pesquisa se o usuário digitou algo
  if (valorDigitado !== "") {
    // Converte para número
    const codeNumber = Number(valorDigitado);

    // Verifica se existe no array httpCatData
    const existeNoArray = httpCatData.find((item) => item.status == codeNumber);

    // Se existir, redireciona para a página do status
    if (existeNoArray) {
      window.location.href = `src/status/status.html?code=${codeNumber}`;
    } else {
      // Se não existir, redireciona para 404
      window.location.href = `src/status/status.html?code=404`;
    }
  }
}

// OUVIR CLICK NO BOTÃO
btnBusca.addEventListener("click", () => {
  pesquisarStatusCode();
});

// OUVIR "ENTER" NO INPUT
inputBusca.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    pesquisarStatusCode();
  }
});

