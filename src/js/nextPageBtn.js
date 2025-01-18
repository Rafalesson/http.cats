import { httpCatData } from './data.js';

function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

const sortedData = [...httpCatData].sort((a, b) => a.status - b.status);

document.addEventListener("DOMContentLoaded", () => {
  const code = getQueryParam("code");
  const codeNumber = Number(code);

  // Acha o índice no sortedData
  const currentIndex = sortedData.findIndex(item => item.status === codeNumber);

  // Se não encontrou, redireciona para 404 ou faça algo
  if (currentIndex === -1) {
    window.location.href = "status.html?code=404";
    return;
  }

  // Calcula índice do próximo e anterior em modo circular
  const total = sortedData.length;
  const nextIndex = (currentIndex + 1) % total;
  const prevIndex = (currentIndex - 1 + total) % total;

  // Pega os botões
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");

  // Quando clicar no "anterior"
  btnPrev.addEventListener("click", () => {
    const newCode = sortedData[prevIndex].status;
    // Ajuste o caminho se seu HTML estiver em outra pasta
    window.location.href = `status.html?code=${newCode}`;
  });

  // Quando clicar no "próximo"
  btnNext.addEventListener("click", () => {
    const newCode = sortedData[nextIndex].status;
    window.location.href = `status.html?code=${newCode}`;
  });
});