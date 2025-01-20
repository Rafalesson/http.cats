document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollToTopBtn");

  // Função que mostra ou esconde o botão dependendo da rolagem
  function toggleScrollBtn() {
    // Se a rolagem vertical for maior que 800px, mostra o botão
    if (window.scrollY > 800) {
      scrollBtn.style.display = "flex"; 
    } else {
      scrollBtn.style.display = "none";
    }

     // Verifica se o usuário está perto do final da página (ex.: a 50px do fim)
     const nearBottom =
     window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

   // Se está perto do fim, adiciona a classe que move o botão um pouco para cima
   if (nearBottom) {
     scrollBtn.classList.add("sobe");
   } else {
     // Caso contrário, remove a classe
     scrollBtn.classList.remove("sobe");
   }
  }

  // Quando o usuário rolar a página, chamamos toggleScrollBtn
  window.addEventListener("scroll", toggleScrollBtn);

  // Ao clicar no botão, rola para o topo
  scrollBtn.addEventListener("click", () => {
    // Scroll suave para o topo
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});